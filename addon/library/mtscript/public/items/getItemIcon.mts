[h: oOggetto = arg(0)]

[h, if(json.type(oOggetto) != "OBJECT"): return (0,"")]
[h: sIcon = json.get(oOggetto,"icona")]
[h, if(findToken(sIcon,"Librerie") != ""): return(0,getImage(sIcon))]

[macro("gui/getItemCategory@this"): json.append("",oOggetto)]
[h: sCategoria = lower(macro.return)]
[h, if(sCategoria=="arma"): sCategoria = lower(json.get(oOggetto,"tipoArma"))]

[h, switch(sCategoria), code:
	case "amuleto":{
		[sIcon = getImage("Image:Amuleto")]
	};
	case "anello":{
		[sIcon = getImage("Image:Anello")]
	};
	case "artefatto":{
		[sIcon = getImage("Image:Artefatto")]
	};
	case "ascia":{
		[sIcon = getImage("Image:Ascia")]
	};
	case "armatura":{
		[sIcon = getImage("Image:ArmaturaPiastre")]
	};
	case "bracciali":{
		[sIcon = getImage("Image:Bracciali")]
	};
	case "cintura":{
		[sIcon = getImage("Image:Cintura")]
	};
	case "elmo":{
		[sIcon = getImage("Image:Elmo")]
	};
	case "guanti":{
		[sIcon = getImage("Image:Guanti")]
	};
	case "lancio":{
		[sIcon = getImage("Image:ColtelloLancio")]
	};
	case "mantello":{
		[sIcon = getImage("Image:Mantello")]
	};
	case "mazza":{
		[sIcon = getImage("Image:Mazza")]
	};
	case "scudo":{
		[sIcon = getImage("Image:Scudo")]
	};
	case "spada":{
		[sIcon = getImage("Image:Spada")]
	};
	case "stivali":{
		[sIcon = getImage("Image:Stivali")]
	};
	case "tiro":{
		[sIcon = getImage("Image:Arco")]
	};
	default:{
		[sIcon = ""]
	}
]

[h: macro.return = sIcon]
