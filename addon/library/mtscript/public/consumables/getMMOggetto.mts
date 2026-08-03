[h: source = arg(0)]
[h: sItemName = arg(1)]
[h: sTipoOggetto = arg(2)]

[h: iPA = getSpellMM(source, sItemName, 0, 0)]
[h, if(iPA == 0): return(0, iPA)]

[h, switch(sTipoOggetto), code:
	case "POZIONE": {
		[bSkillUsed = getDaMemoriaRound(source, "FirstPotionRoundUsed")]
		[iMod = -(getLivelloAbilita(source, "DimestichezzaPozioni"))]		
	};
	default: {
		[bSkillUsed = 0]
		[iMod = 0]		
	}
]

[h, if(bSkillUsed != 1): iPA = iPA + iMod]

[h: iPA = max(iPA, 1)]

[h: macro.return = iPA]