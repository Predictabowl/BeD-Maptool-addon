<!-- DEPRECATED? -->
[h: target = json.get(macro.args,"target")]

[h, if(json.contains(macro.args,"Ordina")), code:{
	[jPoteri = getPoteriMem(target)]
	[macro("utility/jsonObjToList@this"):jPoteri]
	[macro("gui/ordinaListDialog@this"):json.append(target,macro.return,"gui/closeOrdinaPoteri@lib:it.aldinucci.piero.bed.maptool.ruleset")]
}]

[h, if(json.contains(macro.args,"Mantieni")), code:{
	[macro("gui/dialogMantenimenti@this"): target]
	[return(0,"")]
}]

[h, if(json.contains(macro.args,"LibroPot")), code:{
	[if(isDialogVisible("memorizzaPoteri")), code:{
		[oProperties = getDialogProperties("memorizzaPoteri")]
		[setPreferenza("larghezza",json.get(oProperties,"width"),target,"Dialog_Libro_Poteri")]
		[setPreferenza("altezza",json.get(oProperties,"height"),target,"Dialog_Libro_Poteri")]
		[closeDialog("memorizzaPoteri")]
	};{
		[macro("gui/frameLibroPoteri@this"): target]
	}]
	[return(0,"")]
}]

[h, if(json.contains(macro.args,"selected")), code:{

	[spellName = json.get(macro.args,"selected")]
	[h: broadcast(strformat("%s sta memorizzando %s (Giocatore: %s)",getName(target),fetchSpellProp(spellName,"nome_decorativo"),getPlayerName()),"GM")]
	[if(isCombat()), code:{
		[broadcast("Non puoi cambiare i poteri memorizzati durate il combattimento",getPlayerName())]
		[macro("gui/listaPoteriMem@this"):target]
		[return(0,0)]
	};{
		[macro("gui/aggiungiPotereAdv@this"):json.set("","target",target,"spell",spellName)]
	}]
	
}]

