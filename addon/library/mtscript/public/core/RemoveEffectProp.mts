[h: target = json.get(macro.args,"target")]
[h: params = json.get(macro.args,"params")]
[h: iMolt = json.get(macro.args,"moltiplicatore")]

[h: type = json.get(params,"tipo")]

[h, switch (type), code:
case "doneMod":{
	[h: key = json.get(params,"key")]
	[h: value = json.get(params,"value")]
	[h: oldValue = getProperty(key,target)]
	[h: bMolt = json.get(params,"moltiplicabile")]
	[h, if(!isNumber(bMolt)): bMolt = 0]
	[h, if(!bMolt): iMolt = 1]

	[if(isNumber(oldValue)), code:{
		[oldValue = oldValue - value*iMolt]
	};{
		[iPos = listFind(oldValue,value)]
		[oldValue = listDelete(oldValue,iPos)]
	}]
	[setProperty(key, oldValue,target)]
};
case "doneSet":{
	[h: key = json.get(params,"key")]
	[h: value = json.get(params,"value")]
	[setProperty(key,value,target)]
};
case "evento":{
	[h: tipo = json.get(params,"tipoEvento")]
	[h: nome = json.get(params,"key")]
	[macro("events/eventUninstaller@this"): json.append(target,tipo,nome)]
};
case "macroCall":{
	[h: macroName = json.get(params,"macroName")]
	[h: parametri = json.get(params,"parametri")]
	[h: parametri = json.set("","target",target,"parametri",parametri,"remove",1)]
	[macro(macroName): parametri]
};
case "aura":{
	[h: source = json.get(params,"source")]
	[h: idAura = json.get(params,"idAura")]
	[macro("powers/removeAura@this"): json.append(source,idAura)]
};
default: {
}]