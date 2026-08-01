[h: oToken = arg(0)]
[h, if(argCount() > 1): spellName = arg(1); spellName = ""]

[h, if(spellName!=""), code:{
	[h: iRecupero = getLibProperty("recupero",spellName)]
	[h, if(!isNumber(iRecupero)): iRecupero = 0]
	[if(iRecupero == 0): return(0,1)]
}]

[h, macro("powers/getDurataRecupero@this"): oToken]
[h: iDurata = macro.return]

[h, if(iDurata == 0): return(0,1)]

[h: macro.return = 1.2 + (Math.pow(iDurata,1.5)*0.044)]