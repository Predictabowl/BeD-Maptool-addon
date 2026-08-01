[h: source = arg(0)]

[h: sDialog = "DialogAbilita"]

[h, if(isDialogVisible(sDialog)), code:{
	[if(source == ""), code:{
		[sProp = getDialogProperties(sDialog)]
		[source = json.get(sProp,"value")]
	}]
	[macro("gui/isAllowed@this"): source]
	[if(macro.return), code:{
		[macro("gui/dialogAbilitaClasse@this"): source]
	}]
}]