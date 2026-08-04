[h: jParams = json.set("", "layer", "Object", "range", json.set("", "upto", 3), "propertyType", "Interattivo")]
[h: lTokens = getTokens(",", jParams)]
[h: lTemp = ""]
[h, foreach(sToken, lTokens), code:{
	[tx = getTokenX(1, sToken)]
	[ty = getTokenY(1, sToken)]
	[if(getVisible(sToken) && isVisible(tx, ty)): lTemp = listAppend(lTemp, sToken)]
}]
[h: lTokens = lTemp]
[h, if(listCount(lTokens) < 1): return(0,0)]
[h, if(listCount(lTokens) > 1), code:{
	[lTokenNames = ""]
	[foreach(sToken, lTokens), code:{
		[lTokenNames = listAppend(lTokenNames, strformat("<html><table><tr><td><img src='%s'></td><td>%s</td></tr></table></html>", getTokenImage(80, sToken), getName(sToken)))]
	}]
	[bSelect = input("iInteractive|" + lTokenNames + "|Seleziona|RADIO|SPAN=TRUE")]
	[if(!bSelect): return(0, 0)]
	[oInteractive = listGet(lTokens, iInteractive)]
};{
	[h: oInteractive = listGet(lTokens,0)]
}]

[h: source = getImpersonated()]
[h: nomeMacro = getProperty("nome_macro",oInteractive)]
[h, macro(nomeMacro): json.set("","source",source,"interattivo",oInteractive)]
