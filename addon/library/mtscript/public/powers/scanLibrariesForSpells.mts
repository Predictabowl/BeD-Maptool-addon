[h: allTokens = getVisibleTokens()]

[h: oLibrary = getMacroLocation()]
[h: setLibMemoria(oLibrary,"LISTEINCANTESIMI","{}")]
[h,foreach(oToken,allTokens), code:{
	[sTipo = getPropertyType(oToken)]
	[if(sTipo == "SpellToken"), code:{
		[macro("powers/addSpellInLib@this"):oToken]
	}]
}]
