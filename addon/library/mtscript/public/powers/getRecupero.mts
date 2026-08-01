[h: broadcast(strformat("DEPRECATED: %s@%s",getMacroName(),getMacroLocation()))]
[h: source = arg(0)]
[h, if(argCount() > 1): spellName = arg(1); spellName = ""]


[h: sRecupero = "Recupero"]
[macro("core/getEffect@this"): json.append(source,sRecupero)]
[h: effettoRecupero = macro.return]


[h: iRecupero = 1]
[h, if(spellName!=""), code:{
	[h: iRecupero = getLibProperty("recupero",spellName)]
	[h, if(!isNumber(iRecupero)): iRecupero = 0]
}]

[h: flag = math.mod(json.isEmpty(effettoRecupero)+1,2) * iRecupero]

[h, if(flag == 0), code:{
	[iResult = 0]
};{
	[iResult = json.get(effettoRecupero,"potenza"))]
}]

[h: macro.return = iResult]
