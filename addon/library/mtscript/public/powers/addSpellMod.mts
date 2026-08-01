[h: oArg = arg(0)]
[h, if(json.type(oArg) == "OBJECT"), code:{
	[h: source = json.get(oArg,"source")]
	[h: modSpan = json.get(oArg,"tag")]
	[h: modType = json.get(oArg,"tipo")]
	[h: flatMod = json.get(oArg,"mod")]
	[h: percMod = json.get(oArg,"perc")]
};{
	[source = arg(0)]
	[modSpan = arg(1)]
	[modType = arg(2)]
	[flatMod = arg(3)]
	[if (argCount()>4): percMod = arg(4); percMod = ""]
}]

[h: switchToken(source)]
[h, if(flatMod==""): flatMod = 0]
[h, if(percMod==""): percMod = 0]
[h, if(json.type(Spell_Mod) != "OBJECT"): Spell_Mod="{}"]

[h, if(json.contains(Spell_Mod,modType)), code:{
	[h: listO = json.get(Spell_Mod,modType)]
};{
	[listO = "{}"]
}]




[h, if(json.contains(listO,modSpan)), code:{
	[h: oItem = json.get(listO,modSpan)]
	[oldFlatMod = json.get(oItem,"flatMod")]
	[if(oldFlatMod ==""): oldFlatMod = 0]
	[ oldPercMod = json.get(oItem,"percMod")]
	[if(oldPercMod ==""): oldPercMod = 0]

	[newFlatMod = oldFlatMod+flatMod]
	[newPercMod = oldPercMod+percMod]
};{
	[oItem = ""]
	[newFlatMod = flatMod]
	[newPercMod = percMod]
}]

[h, if(newFlatMod == 0 && newPercMod == 0), code:{
	[macro("powers/delSpellMod@this"): json.append(source,modSpan,modType)]
};{
	[oItem = json.set(oItem,"percMod",newPercMod,"flatMod",newFlatMod)]
	[h: listO = json.set(listO,modSpan,oItem)]
	[h: Spell_Mod = json.set(Spell_Mod,modType,listO)]
}]