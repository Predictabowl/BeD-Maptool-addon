[h: target = json.get(macro.args,"target")]
[h: sFrame = json.get(macro.args,"frameName")]
[h: sButton = json.get(macro.args,"buttonPressed")]

[macro("gui/blockIfNotOwner@this"):target]


[h, if(json.contains(macro.args,"Aspettare") == 1), code:{
	[macro("mobs/setAttesa@this"): target]
	[return(0,"")]	
}]

[h, if(json.contains(macro.args,"Attacca") == 1), code:{
	[macro("combat/iniziaAttacco@this"):json.set("","source",target)]
	[return(0,"")]	
}]


[h, if(json.contains(macro.args,"CiclaVista")), code:{
	[macro("mobs/ciclaVisteToken@this"): target]
	[return(0,"")]	
}]

[r, switch(sButton), code:
	case "Azione":{
		[macro("mobs/RisolviAzione@this"): target]		
	};
	case "Interrompi":{
		[macro("mobs/InterrompiAzione@this"):target]
		[macro("utility/sortIniziativa@this"):0]
	};
	case "FrameScheda":{
		[if(isFrameVisible("Scheda")), code:{
			[closeFrame("Scheda")]
		};{
			[macro("gui/ApriScheda@this"):json.append(target,"Scheda")]
		}]
	};
	case "CentraToken":{
		[macro("utility/findAndCenterToken@this"): target]
	};
	case "SelBersagli":{
		[macro("powers/TargetingSelect@this"): target]	
	};
	case "DespawnTokenBersaglio":{
		[macro("gui/toggleSpawnTokenBersaglio@this"): target]
	};
	case "Equipaggiamento":{
		[if(isDialogVisible("DialogCambioArmi")), code:{
			[closeDialog("DialogCambioArmi")]		
		};{
			[macro("gui/dialogCambioArma@this"): target]
		}]
	};
	case "AbilitaClasse":{
		[if(isFrameVisible("PannelloAbilita")), code:{
			[oProperties = getFrameProperties("PannelloAbilita")]
			[setPreferenza("larghezza",json.get(oProperties,"width"),target,"Dialog_Abilita_Classe")]
			[setPreferenza("altezza",json.get(oProperties,"height"),target,"Dialog_Abilita_Classe")]
			[closeFrame("PannelloAbilita")]
		};{	
			[macro("gui/dialogAbilitaClasse@this"): target]
		}]
	};
	case "PoteriClasse":{
		[macro("gui/listaPoteriMem@this"):target]
	};
	case "AttaccaLancio":{
		[macro("combat/iniziaAttacco@this"):json.set("","source",target,"arma",2)]
	};
	case "TogglePoteriLancio":{
		[macro("powers/togglePoteriLancioOverride@this"): target]
	};
	case "ToggleNecrofuria":{
		[macro("class_skills/toggleNecrofuria@this"): target]
	};
	case "ToggleSovSpiritico":{
		[macro("class_skills/toggleSovSpiritico@this"): target]
	};
	case "LibroIncantesimi":{
		[if(isDialogVisible("memorizzaPoteri")), code:{
			[oProperties = getDialogProperties("memorizzaPoteri")]
			[setPreferenza("larghezza",json.get(oProperties,"width"),target,"Dialog_Libro_Poteri")]
			[setPreferenza("altezza",json.get(oProperties,"height"),target,"Dialog_Libro_Poteri")]
			[closeDialog("memorizzaPoteri")]
		};{
			[macro("gui/frameLibroPoteri@this"): target]
		}]
	};
	case "Consumabili": {
		[macro("gui/dialogOggettiUsabili@this"): target]
	};
	case "Mantenimenti": {
		[macro("gui/dialogMantenimenti@this"): target]
	};
	case "VistaSpiriti": {
		[macro("gui/showPannelloSpiriti@this"): target]
	};
	case "Sortilegi": {
		[macro("gui/GrimorioSortilegi@this"): target]
	};
	case "Capacita": {
		[macro("gui/PannelloCapacita@this"): target]
	};
	default :{}
]