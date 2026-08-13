[h: oToken = arg(0)]
[h: spellName = arg(1)]
[h, if(argCount()>2) : jOptions = arg(2); jOptions = "{}"]

[h: jReturn = "{}"]
[h: oCache = getDaCache(oToken,"SpellStats")]
[h, if(!json.isEmpty(oCache)), code:{
	[jReturn = json.get(oCache,spellName)]
}]

[h, if(json.isEmpty(jReturn)), code:{
	[h: oParams = json.set("","source",oToken,"spellName",spellName,"critRes",0)] 
	[h, macro("powers/getSpellPrice@this"): oParams]
	[h: iPA = json.get(macro.return, "PA")]
	[h: iMana = json.get(macro.return, "mana")]
	[h: iPF = json.get(macro.return, "PF")]
	[h: iPP = json.get(macro.return, "PP")]
	[h: iMM = json.get(macro.return, "MM")]
	[h: iTempo = getSpellTime(oParams)]
	[h: jReturn = json.set("", "mana", iMana, "PF", iPF, "PA", iPA, "tempo", iTempo, "PP", iPP, "MM", iMM)]

	[macro("powers/getMantPP@this"): oParams]
	[h: jReturn = json.set(jReturn, "PPMant", macro.return)]

	[macro("powers/getMantMana@this"): oParams]
	[h: jReturn = json.set(jReturn, "ManaMant", macro.return)]

	[macro("powers/getMantPF@this"): oParams]
	[h: jReturn = json.set(jReturn, "PFMant", macro.return)]
			
	[h: oCache = json.set(oCache,spellName,jReturn)]
	[h: setInCache(oToken,"SpellStats", oCache)]
}]

[h: return(0, jReturn)]