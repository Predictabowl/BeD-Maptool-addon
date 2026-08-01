[h, if(argCount()>1), code:{
	[source = arg(0)]	
	[target = arg(1)]
	[spellName = arg(2)]
	[oJson= ""]
};{
	[oJson = arg(0)]
}]

[h: element = ""]

[h, if(json.type(oJson) == "OBJECT"), code:{
	[h: source = json.get(oJson,"source")]
	[h: target = json.get(oJson,"target")]
	[h: spellName = json.get(oJson,"spellName")]
	[h: element = json.get(oJson,"elemento")]
}]

[h, if(json.type(oJson) == "ARRAY"), code:{
		[h: target = json.get(oJson,0)]
		[h: element = json.get(oJson,1)]
		[spellName = ""]
		[if(json.length(oJson) > 2): tagList = json.get(oJson,2); tagList = ""]
}]

[h, if(spellName != ""), code:{
	[if(element == ""): element = getSpellElement(json.set("", "source",source, "target", target, "spellName", spellName))]
	[h: sSpellTipo = getLibProperty("tipo",spellName)]
	[h: tagList = listAppend("",sSpellTipo)]
	[h: oSpellTags = getLibProperty("tags",spellName)]
	[h: tagList = listAppend(tagList,oSpellTags)]
}; {
	[tagList = ""]
}]


[h, macro("core/caseResistName@this"):element]
[h, if (element == "null"), code:{
	[h: element = "Fisico"]
}]
[h: element = "Res_"+macro.return]


[h: iReturn = getProperty(element,target) + getProperty("Tutte_Res", target)]
[h, macro("core/getStatModifier@this"): json.append(target,element)]
[h: iReturn = iReturn +macro.return]
[h, macro("core/getStatModifier@this"): json.append(target,"TUTTERESISTENZE")]
[h: iReturn = iReturn +macro.return]

[h, foreach(sTag,tagList), code:{
	[macro("crud/getResistenzaExtra@this"): json.append(target,sTag)]
	[iReturn = iReturn + macro.return]
}]

[h: macro.return = iReturn]