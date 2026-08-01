[h: source = json.get(macro.args,"source")]
[h: spellName = json.get(macro.args,"spellName")]
[h: sFrame = json.get(macro.args,"frame")]

[h: aPoteri = getPoteriMem(source)] 

[h, if(json.contains(aPoteri,spellName)), code:{
	[oParam = json.remove(macro.args,"frame")]
	[macro("powers/iniziaSpellCast@this"): oParam]
};{
	[macro("gui/updatePoteri@this"): json.append(source,sFrame)]
}]
