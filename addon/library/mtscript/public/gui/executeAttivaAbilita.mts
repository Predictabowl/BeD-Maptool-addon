[h: oToken = json.get(macro.args,"token")]
[h: sAbilita = json.get(macro.args,"libAbilita")]
[h: sComando = json.get(macro.args,"comando")]

[macro("gui/blockIfNotOwner@this"): oToken]

[h, switch(sComando), code:
	case "Attiva":{
		[oParam = json.append(oToken,sAbilita)]
		[macro("isAbilitaInUso@Lib:AbilitaClasse"): oParam]
		[bInUso = macro.return]
		[if(bInUso), code:{
			[macro("DisattivaAbilita@Lib:AbilitaClasse"): oParam]
		};{
			[macro("AttivaAbilita@Lib:AbilitaClasse"): oParam]
		}]
	};
	case "Autocast":{
		[macro("toggleAutocastAbilita@Lib:AbilitaClasse"): json.append(oToken, sAbilita)]
	};
	default:{}
]

[macro("gui/dialogAbilitaClasse@this"): oToken]
[macro("gui/updateUIOverlay@this"): oToken]
[h: macro.return = ""]
