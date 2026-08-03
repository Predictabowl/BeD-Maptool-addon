[h: allTokens = getVisibleTokens()]

[h: oLibrary = getMacroLocation()]
[h: setLibMemoria(oLibrary,"LISTECONSUMABILI","{}")]
[h,foreach(oToken,allTokens), code:{
	[sTipo = getPropertyType(oToken)]
	[if(sTipo == "ConsumabileToken"), code:{
		[macro("consumables/addItemInLib@this"):oToken]
	}]
}]
