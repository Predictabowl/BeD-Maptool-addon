[h: oToken = arg(0)]


[h: lCarP = getProperty("Car_Mana", oToken)]
[h, if(isNumber(lCarP)): return(0,lCarP)]

[h: iSize = listCount(lCarP)]

[h, switch(iSize), code:
	case 1:{
		[iReturn = getProperty(listGet(lCarP,0), oToken)]
	};
	case 2:{
		[iReturn = getCarCombinata(oToken, listGet(lCarP,0), listGet(lCarP,1))]
	};
	case 3:{
		[iReturn = getCarCombinata(oToken, listGet(lCarP,0), listGet(lCarP,1), listGet(lCarP,2))]
	};
	default:{
		[iReturn = ""]
	}
]
[h: assert(isNumber(iReturn), "ERRORE: La Caratteristica Mana non è impostata correttamente.")]
[h: return(0, iReturn)]