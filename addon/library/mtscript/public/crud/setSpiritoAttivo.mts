[h: broadcast(strformat("Funziona Deprecata: %s@%s", getMacroName(), getMacroLocation()))]
[h: oToken = json.get(macro.args,0)]
[h, if(json.length(macro.args)>1), code:{
	[sSpirito = json.get(macro.args,1)] 
};{
	[sSpirito = ""]
}]

[h: switchToken(oToken)]

[h, if(sSpirito == ""), code:{
	[Lista_Dati = deleteStrProp(Lista_Dati,"SpiritoAttivo")]
};{
	[Lista_Dati = setStrProp(Lista_Dati,"SpiritoAttivo",sSpirito)]
}]