[h: target = json.get(macro.args,0)]
[h: effetto = json.get(macro.args,1)]
[h: switchToken(target)]

[h: subList = json.get(Lista_Effetti,effetto)]

[h: sTipo = upper(json.get(subList,"tipo"))]
[h, if(sTipo == "NASCOSTO"), code:{
	[endstr = ""]
};{
	[endstr = replace(effetto,"_"," ") + " svanisce da "+  token.name+".<br>"]
	<!-- Eventi On_Effect_Removed -->
	[h: oEventParam = json.set("","effetto",macro.args)]
	[macro("events/runEvents@this"): json.set("","source",target,"event","On_Effect_Removed","eventParam",oEventParam)]
	[sRemoveMsg = popMessaggio(target,"msgEventOn_Effect_Removed")]
	[if(sRemoveMsg != ""): endstr = strformat("{endstr}{sRemoveMsg}<br>"]
}]


[h: stato = json.get(subList,"stato")]
[h: params = json.get(subList,"params")]

[macro("core/getEffectMolt@this"):json.append(target,effetto)]
[h: iMolt = macro.return]

[h, foreach(param,params,"<br>"), code:{
	[h: param = json.set("","target",target,"params",param,"moltiplicatore",iMolt)]
	[macro("core/RemoveEffectProp@this"): param]
}]

[h: Lista_Effetti = json.remove(Lista_Effetti,effetto)]

[h, if (stato != "null"), code:{
	[macro("utility/popStato@this"):listAppend(target,stato)]
}]

[h: macro.return = endstr]