<-- DEPRECATED -->
[h: spellName = arg(0)]
[h: broadcast(strformat("The use of DL is Deprecated. %s@%s", getMacroName(), getMacroLocation()))]

[h, if(spellName == "ATTACCO"): return(0,6)]

[h: iDL = getLibProperty("DL", spellName)]
[h, if(isNumber(iDL)): return(0, iDL)]

[h: sPP = getLibProperty("PP",spellName)]
[h: sPA = getLibProperty("PA",spellName)]
[h: sMM = getLibProperty("MM",spellName)]

[h: basePA = listGet(sPA,0)]
[h, switch(basePA), code:
	case "arma":{
		[iDLPA = 6]
	};
	default: {
		[iDLPA = basePA]
	}
]

[h: iDLPP = listGet(sPP,0)]
[h: iDLMM = listGet(sMM,0)]
[h: iDL = iDLPA + iDLPP + iDLMM]

[h: sTags = upper(getLibProperty("tags",spellName))]
[h, if(listContains(sTags,"CONTROLLATO")): iDL = iDL -3]

[h: macro.return = iDL]