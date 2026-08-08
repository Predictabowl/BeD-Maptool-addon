[h: spellName = arg(0)]

[h: sType = upper(fetchSpellProp(spellName,"tipo"))]
[h: return = 0]
[h, if(sType == "SUPPORTO" || sType == "MUTAFORMA" || sType == "SERVITORE"), code:{
	[bFlag = 1]
};{
	[bFlag = 0]
}]

[h: sTipoBer = upper(fetchSpellProp(spellName,"tipo_bersaglio"))]
[h, if(listContains(sTipoBer,"TUTTI")): bFlag = 1]
[h, if(listContains(sTipoBer,"UTILE")): bFlag = 1]
[h, if(listContains(sTipoBer,"DANNOSO")): bFlag = 0]
[h, if(listContains(sTipoBer,"ALLEATI")): bFlag = 1]
[h, if(listContains(sTipoBer,"NEMICI")): bFlag = 0]


<!-- Manca qualche condizione -->

[h: macro.return = bFlag]