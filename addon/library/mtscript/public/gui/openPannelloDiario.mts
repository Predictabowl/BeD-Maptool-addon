[h: oToken = arg(0)]

[h: sTag = "DialogPannelloDiario"]
[h, if(isDialogVisible(sTag)), code:{
	[sGruppoPreferenze = "Dialog_Diario_Campagna"]
	[oProperties = getDialogProperties(sTag)]
	[setPreferenza("larghezza",json.get(oProperties,"width"),oToken,sGruppoPreferenze)]
	[setPreferenza("altezza",json.get(oProperties,"height"),oToken,sGruppoPreferenze)]
	
	[closeDialog(sTag)]
};{
	[macro("gui/showPannelloDiario@this"): oToken]
}]