[h: oToken = arg(0)]
[h, if(argCount() > 1): spellName = arg(1); spellName = ""]

[h, if(spellName!=""), code:{
	[h: iRecupero = getLibProperty("recupero",spellName)]
	[h, if(!isNumber(iRecupero)): iRecupero = 0]
	[if(iRecupero == 0): return(0,0)]
}]

[h, macro("powers/getDurataRecupero@this"): oToken]
[h: iDurata = macro.return]

[h: macro.return = iDurata * 4]