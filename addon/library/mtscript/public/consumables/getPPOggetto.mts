[h: source = arg(0)]
[h: sItemName = arg(1)]
[h: sTipoOggetto = arg(2)]

[h: iPA = getSpellPP(source, sItemName, 0, 0)]
[h, if(iPA == 0): return(0, iPA)]
[h, switch(sTipoOggetto), code:
	case "RUNA": {
		[bSkillUsed = getDaMemoriaRound(source, "FirstRuneRoundUsed")]
		[iMod = -(getLivelloAbilita(source, "DimestichezzaRune"))]
	};
	case "PERGAMENA": {
		[bSkillUsed = getDaMemoriaRound(source, "FirstScrollRoundUsed")]
		[iMod = -(getLivelloAbilita(source, "DimestichezzaPergamene"))]		
	};
	default: {
		[bSkillUsed = 0]
		[iMod = 0]		
	}
]

[h, if(bSkillUsed != 1): iPA = iPA + iMod]

[h: iPA = max(iPA, 1)]

[h: macro.return = iPA]