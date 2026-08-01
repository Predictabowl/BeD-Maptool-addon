[h: oToken = json.get(macro.args,"token")]
[h: sAzione = json.get(macro.args,"action-performed")]


[h, switch(sAzione), code:
	case "toggleMovTattico":{
		[macro("movement/toggleMovTattico@this"): oToken]
		[macro("gui/showPannelloAzioni@this"): oToken]
		[return(0,0)]
	};
	case "alzarsi":{
		[macro("mobs/iniziaAlzarsi@this"): oToken]
	};
	case "nascondersi":{
		[macro("mobs/iniziaNascondersi@this"): oToken]
	};
	case "toggleVistaPersonale":{
		[macro("gui/toggleBottoneVista@this"): oToken]
		[macro("gui/updateUIOverlay@this"): oToken]
	};
	case "openDiarioCampagna":{
		[macro("gui/openPannelloDiario@this"): oToken]
	};
	case "listaEffettiPersonali":{
		[macro("gui/ListaEffetti@this"):oToken]
	};
	case "trasferisciEquip":{
		[macro("mobs/trasferisciEquipaggiamento@this"): json.append(oToken,getSelected())]
	};
	default:{}
]

[h: closeDialog("DialogPannelloAzioni")]