[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: params = json.get(macro.args,"params")]
[h: effetto = json.get(macro.args,"effetto")]
[h: iMolt = json.get(macro.args,"moltiplicatore")]
[h: oOtherInfo = json.get(macro.args,"otherInfo")]
[h: type = json.get(params,"tipo")]

[h: msg = ""]
[h: sMsgChannel = "msgEffetto"]

[h: newParams = params]
[r, switch (type), code:
case "onceMod":{
	[macro("core/onceModCode@this"):json.append(target,params,iMolt)]
	[h: newParams = json.set(newParams,"tipo","doneMod")]
};
case "onceSet":{
	[h: key = json.get(params,"key")]
	[h: bMolt = json.get(params,"moltiplicabile")]
	[h, if(!isNumber(bMolt)): bMolt = 0]
	[h, if(!bMolt): value = json.get(params,"value"); value = json.get(params,"value")*iMolt]
	[h: oldValue = getProperty(key,target)]
	[h: setProperty(key,value,target)]
	[h: newParams = json.set(newParams,"tipo","doneSet","value",oldValue)]
};
case "consume":{
	[macro("core/onceModCode@this"):json.append(target,params,iMolt)]
	[h: newParams = json.set(newParams,"tipo","consumed")]
};
case "continuousMod":{
	[h: key = json.get(params,"key")]
	[h: bMolt = json.get(params,"moltiplicabile")]
	[h, if(!isNumber(bMolt)): bMolt = 0]
	[h, if(!bMolt): value = json.get(params,"value"); value = json.get(params,"value")*iMolt]
	[h: oldValue = getProperty(key,target)]
	[h: setProperty(key, oldValue+value,target)]
};
case "danno":{
	[h: source = json.get(params,"source")]
	[h: value = json.get(params,"value")]
	[h: dmg = eval(string(value))]
	[h: origine = json.get(params,"origine")]
	[h, if(origine == ""): origine = replace(effetto,"_"," ")+":"]
	[h: param = json.set("","target",target,"valore",dmg,"origine",origine,"source",source,"verbose",0)]
	[macro("core/DannoTarget@this"): param]
	[macro("popMessaggio@Lib:MetodiVari"): json.set("","token",target,"key","strDanno")]
	[h: msg = macro.return]
};
case "cura":{
	[h: source = json.get(params,"source")]
	[h: value = json.get(params,"value")]
	[h: heal = eval(string(value))]
	[h: origine = replace(effetto,"_"," ")+":"]
	[h: param = json.set("","target",target,"source",source,"valore",heal,"origine",origine,"verbose",0)]
	[macro("core/CuraTarget@this"): param]
	[macro("popMessaggio@Lib:MetodiVari"): json.set("","token",target,"key","strCura")]
	[h: msg = macro.return]
};
case "evento":{
	[h: tipo = json.get(params,"tipoEvento")]
	[h: nome = json.get(params,"key")]
	[h: macroName = json.get(params,"macroName")]
	[h: macroParam = json.get(params,"macroParam")]
	[h: eventParam = json.set("","name",nome,"event",tipo,"token",target,"macroName",macroName,"macroParam",macroParam)]
	[macro("eventInstaller@Lib:Eventi")]
};
case "macroCall":{
	[h: macroName = json.get(params,"macroName")]
	[h: parametri = json.get(params,"parametri")]
	[h: macroCalled = json.get(params,"macroCalled")]
	[h, if(macroCalled == ""): macroCalled = 0]
	[h: parametri = json.set("","target",target,"source",source,"moltiplicatore",iMolt,"macroCalled",macroCalled,"parametri",parametri, "otherInfo", oOtherInfo)]
	[macro(macroName): parametri]
	[h: msg = string(macro.return)]
	[h: newParams = json.set(newParams,"macroCalled",1)]
};
case "aura":{
	[h: source = json.get(params,"source")]
	[h: idAura = json.get(params,"idAura")]
	[h: updateMacro = json.get(params,"updateMacro")]
	[h: bFirstRound = json.get(params,"firstRoundUpdate")]
	[h, if (updateMacro != "" && bFirstRound == 1), code:{
		[updateParam = json.get(params,"updateParam")]
		[macro(updateMacro): json.set("","target",target,"param",updateParam)]
	}]
	[h, if(bFirstRound != 1): newParams = json.set(newParams,"firstRoundUpdate",1)]
};
default: {
}]

[h, if(msg != ""): appendMessaggio(target,sMsgChannel,msg)]

[h: macro.return = newParams]
