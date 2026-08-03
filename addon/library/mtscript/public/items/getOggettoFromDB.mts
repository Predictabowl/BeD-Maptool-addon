[h: sId = arg(0)]
[h: sCategoria = lower(arg(1))]


[h, switch(sCategoria), code:
	case "arma":{
		[oOggetto = getArmaFromDB(sId)]
	};
	case "armatura":{
		[macro("items/getArmaturaFromDB@this"): sId]
		[oOggetto = macro.return]
	};
	case "scudo":{
		[macro("items/getScudoFromDB@this"): sId]
		[oOggetto = macro.return]
	};
	default:{
		[macro("items/getAccessorioFromDB@this"): json.append(sId,sCategoria)]
		[oOggetto = macro.return]
	}
]

[h: macro.return = oOggetto]