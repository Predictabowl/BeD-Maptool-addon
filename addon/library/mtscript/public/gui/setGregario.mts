[h: token = macro.args]

[h: source = getImpersonated()]
[h: bOwner = isOwner(getPlayerName(),token)]
[h, if(bOwner == 1), code:{
	[h: switchToken(source)]
	[h: Lista_Dati = setStrProp(Lista_Dati,"Gregario",token)]
	[return = 1]
};{
	[return = 0]
}]

[h: macro.return = return]