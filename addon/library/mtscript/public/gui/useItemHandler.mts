[h: oToken = json.get(macro.args,"source")]
[h: sArma = json.get(macro.args,"nomeArma")]
[h: iRuna = json.get(macro.args,"slotRuna")]
[h: iSlot = json.get(macro.args,"slotVeloce")]
[h: spellName = json.get(macro.args,"spellName")]


<!-- In base al tipo si cambiano i parametri (WIP) -->
[macro("consumables/getTipoConsumabile@this"): json.append(spellName, iRuna == "null")]
[h: sItemType = macro.return]

[h: oUseParam = json.set("","tipoOggetto",sItemType)]

[h, switch(sItemType), code:
	case "RUNA":{
		[h: oUseParam = json.set(oUseParam,"nomeArma",sArma,"slotRuna",iRuna)]
	};
	default:{
		[h: oUseParam = json.set(oUseParam,"slotVeloce",iSlot)]	
}]

[h: sMacro = "consumables/iniziaUsoConsumabile@this"]
[h: param = json.set("","libName",spellName,"source",oToken,"macro",sMacro,"useParam",oUseParam)]
[macro("gui/iniziaActionBlockWrapper@this"):param]
[h: closeDialog("OggettiConsumabili")]
