[h: oToken = arg(0)]
[h: sResTag = upper(arg(1))]	

[h: switchToken(oToken)]

[h, switch(sResTag), code:
	case "SANGUINAMENTO":{
		[iRes = Res_Sanguinamento]
	};
	case "VELENO":{
		[iRes = Res_Veleno]
	};
	case "MALATTIA":{
		[iRes = Res_Malattia]
	};
	case "MALEDIZIONE":{
		[iRes = Res_Maledizione]
	};
	default:{
		[iRes = 0]
	}
]

[h: macro.return = iRes]