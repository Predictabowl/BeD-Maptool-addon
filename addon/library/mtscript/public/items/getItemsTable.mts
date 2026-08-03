[h: sCat = lower(arg(0))]

[h, switch(sCat), code:
	case "arma":{
		[sTable = "weapons.json"]
	};
	case "armatura":{
		[sTable = "armors.json"]
	};
	case "anello":{
		[sTable = "rings.json"]
	};
	case "amuleto":{
		[sTable = "amulets.json"]
	};	
	case "cintura":{
		[sTable = "belts.json"]
	};
	case "scudo":{
		[sTable = "shields.json"]
	};
	case "bracciali":{
		[sTable = "bracers.json"]
	};
	case "guanti":{
		[sTable = "gloves.json"]
	};
	case "elmo":{
		[sTable = "helmets.json"]
	};
	case "mantello":{
		[sTable = "cloaks.json"]
	};
	case "stivali":{
		[sTable = "boots.json"]
	};
]

[h: macro.return = data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/db/items/" +sTable)]