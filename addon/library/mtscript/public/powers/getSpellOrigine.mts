[h: source = arg(0)]
[h: spellName = arg(1)]
[h, if(argCount() >2): sOrigine = arg(2); sOrigine = source]

<!-- DA FINIRE -->

[h: lTags = upper(getLibProperty("tags",spellName))]

[h, if(listContains(lTags,"SERVITOREORIGIN")), code:{
	[oServitore = findToken(getServitore(source))]
	[assert(oServitore != "","ERRORE: Servitore non presente",0)]
	[return(0,oServitore)]
}]

[h: switchToken(source)]

[h: bOverr = getOverride(source,"OrigineAlternativa")]
[h: bTempOverr = getSpellStartData(source,"origineAlternativa")]
[h, if(bOverr || bTempOverr == 1), code:{
	[macro("powers/getOrigineAlt@this"): source]
	[sOrigine = macro.return]
}]

[h, if(listContains(lTags,"CELLTARGET") || listContains(lTags, "SELFTARGET")): return(0, sOrigine)]


[macro("powers/needTokenBersaglio@this"): json.append(source, spellName)]
[h: bBersaglio = macro.return]
[h: bAoE = isAoESpell(spellName,source)]
[h, if(bAoE && bBersaglio), code:{
	[iRange = getSpellRange(source,spellName)]
	[if(iRange > 0), code:{
		[macro("powers/fixGetTokenBersaglio@this"): json.set("","source",source,"spellName",spellName,"origine",sOrigine)]
		[sOrigine = macro.return]
	}]
}]

[h: macro.return = sOrigine]