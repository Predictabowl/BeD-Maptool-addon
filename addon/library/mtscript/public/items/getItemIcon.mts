[h: oOggetto = arg(0)]

[h, if(json.type(oOggetto) != "OBJECT"): return (0,"")]
[h: sIcon = json.get(oOggetto,"icona")]
[h, if(sIcon != ""): return(0,strformat("lib://%s/icons/items/%{sIcon}", getMacroLocation()))]

[macro("gui/getItemCategory@this"): json.append("",oOggetto)]
[h: sCategoria = lower(macro.return)]
[h, if(sCategoria=="arma"): sCategoria = lower(json.get(oOggetto,"tipoArma"))]

[h, switch(sCategoria), code:
	case "amuleto":{
		[sIcon = "amulets/amuleto.png"]
	};
	case "anello":{
		[sIcon = "rings/anelloBase.png"]
	};
	case "artefatto":{
		[sIcon = "artifacts/artefatto.png"]
	};
	case "ascia":{
		[sIcon = "axes/ascia.png"]
	};
	case "armatura":{
		[sIcon = "armors/Piastre.png"]
	};
	case "bracciali":{
		[sIcon = "bracers/bracciali.png"]
	};
	case "cintura":{
		[sIcon = "belts/cintura.png"]
	};
	case "elmo":{
		[sIcon = "helmets/elmo.png"]
	};
	case "guanti":{
		[sIcon = "gloves/guanti.png"]
	};
	case "lancio":{
		[sIcon = "throwing/throwing_knife.png"]
	};
	case "mantello":{
		[sIcon = "cloaks/mantello.png"]
	};
	case "mazza":{
		[sIcon = "maces/mazza.png"]
	};
	case "scudo":{
		[sIcon = "shields/inv_shield_09.png"]
	};
	case "spada":{
		[sIcon = "swords/spada.png"]
	};
	case "stivali":{
		[sIcon = "boots/stivali.png"]
	};
	case "tiro":{
		[sIcon = "bows/Arco.png"]
	};
	default:{
		[sIcon = ""]
	}
]

[h: macro.return = strformat("lib://%s/icons/items/%{sIcon}", getMacroLocation())]
