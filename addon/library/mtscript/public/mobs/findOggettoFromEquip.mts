[h: oToken = arg(0)]
[h: sItem = arg(1)]

[h: switchToken(oToken)]
[h: jLocalData = json.get(Equipaggiamento, sItem)]
[macro("getItemCategory@Lib:EquipEffect"): jLocalData]
[h: sCat = macro.return]
[h, switch(sCat), code:
	case "arma": {
		[return(0, getArma(oToken, sItem))]
	};
	case "armatura": {
		[macro("mobs/getArmatura@this"): json.append(oToken, sItem)]
		[return(0, macro.return)]
	};
	case "scudo" : {
		[macro("mobs/getScudo@this"): json.append(oToken, sItem)]
		[return(0, macro.return)]
	};
	default: {
		[macro("mobs/getAccessorio@this"): json.append(oToken, sItem)]
		[return(0, macro.return)]
	}	
]