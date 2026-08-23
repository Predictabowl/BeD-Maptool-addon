[h: oToken = json.get(macro.args,"token")]
[h: sAbilita = json.get(macro.args,"libAbilita")]
[h: sComando = json.get(macro.args,"comando")]

[macro("gui/blockIfNotOwner@this"): oToken]

[h, switch(sComando), code:
	case "Attiva":{
		[oParam = json.append(oToken,sAbilita)]
		[macro("class_skills/isAbilitaInUso@this"): oParam]
		[bInUso = macro.return]
		[if(bInUso), code:{
			[macro("class_skills/DisattivaAbilita@this"): oParam]
		};{
			[macro("class_skills/AttivaAbilita@this"): oParam]
		}]
	};
	case "Autocast":{
		[macro("class_skills/toggleAutocastAbilita@this"): json.append(oToken, sAbilita)]
	};
	default:{}
]

[macro("gui/dialogAbilitaClasse@this"): oToken]
[macro("gui/updateUIOverlay@this"): oToken]
[h: return(0, "")]
