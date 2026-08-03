[h: payActionArgs = arg(0)]
[h: sTipoConsumabile = arg(1)]

[h: source = json.get(payActionArgs, "token")]

[macro("core/payAction@this"): payActionArgs]
[h: actionResult = macro.return]

[h, if(!actionResult || !isCombat()): return(0, actionResult)]

[h, switch(sTipoConsumabile), code:
	case "RUNA": {
		[setInMemoriaRound(source, "FirstRuneRoundUsed", 1)]
	};
	case "POZIONE": {
		[setInMemoriaRound(source, "FirstPotionRoundUsed", 1)]
	};
	case "PERGAMENA": {
		[setInMemoriaRound(source, "FirstScrollRoundUsed", 1)]
	};
	default: {
	}
]

[h: macro.return = actionResult]