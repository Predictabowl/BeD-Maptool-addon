[h: spellName = arg(0)]

[h: sType = upper(getLibProperty("tipo", spellName))]

[h, switch(sType), code:
	case "CONTROLLO":{
		[sColor = "Teal"]
	};
	case "MALATTIA":{
		[sColor = "Olive"]
	};
	case "MALEDIZIONE":{
		[sColor = "Purple"]
	};
	case "MARCHIO":{
		[sColor = "Gray"]
	};
	case "MUTAFORMA":{
		[sColor = "Orange"]
	};
	case "SERVITORE":{
		[sColor = "Green"]
	};	
	case "SUPPORTO":{
		[sColor = "Blue"]
	};
	case "MOVIMENTO":{
		[sColor = "Yellow"]
	};
	default: {
		[sColor = "Red"]
	}
]

[h: macro.return = sColor]