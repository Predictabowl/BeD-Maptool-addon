[h: oToken = arg(0)]
[h: resTag = arg(1)]
[h: resValue = arg(2)]

[h: resTag = upper(resTag)]
[h: switchToken(oToken)]

[h, switch(resTag), code:
	case "VELENO":{
		[Res_Veleno = Res_Veleno + resValue]
	};
	case "MALATTIA":{
		[Res_Malattia = Res_Malattia + resValue]
	};
	case "MALEDIZIONE":{
		[Res_Maledizione = Res_Maledizione + resValue]
	};
	default:{
	}
]