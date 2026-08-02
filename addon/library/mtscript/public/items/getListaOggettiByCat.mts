[h: sCat = lower(arg(0))]

[h, switch(sCat), code:
	case "arma":{
		[sTable = "Armi_Json"]
	};
	case "armatura":{
		[sTable = "Armature_Json"]
	};
	case "anello":{
		[sTable = "anello_Json"]
	};
	case "amuleto":{
		[sTable = "amuleto_Json"]
	};	
	case "cintura":{
		[sTable = "cintura_Json"]
	};
	case "scudo":{
		[sTable = "Scudi_Json"]
	};
	case "bracciali":{
		[sTable = "bracciali_Json"]
	};
	case "guanti":{
		[sTable = "guanti_Json"]
	};
	case "elmo":{
		[sTable = "elmo_Json"]
	};
	case "mantello":{
		[sTable = "mantello_Json"]
	};
	case "stivali":{
		[sTable = "stivali_Json"]
	};
]

[oAll = getLibProperty(sTable,getMacroLocation())]
[macro("gui/sortJson@this"): json.append(oAll,"nome")]

