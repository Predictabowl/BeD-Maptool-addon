[h: target = json.get(macro.args,0)]
[h: element = json.get(macro.args,1)]
[macro("core/caseResistName@this"):element]
[h, if (element == "null"), code:{
	[h: element = "Fisico"]
}]
[h: element = "Res_"+macro.return]
[h: return = getProperty(element,target)]

[macro("core/popStatModifier@this"): json.append(target,element)]
[h: return = return +macro.return]

[h: macro.return = return]

[h: broadcast("DEPRECATED "+getMacroName()+"@"+getMacroLocation())]