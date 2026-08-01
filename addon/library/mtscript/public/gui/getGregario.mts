[h: source = getImpersonated()]

[h: switchToken(source)]
[h: return = getStrProp(Lista_Dati,"Gregario")]
[h: bIsOwner = isOwner(getPlayerName(),return)]
[h, if(bIsOwner == 0), code:{
	[return = ""]
	[Lista_Dati = deleteStrProp(Lista_Dati,"Gregario")]
}]

[h: macro.return = return]