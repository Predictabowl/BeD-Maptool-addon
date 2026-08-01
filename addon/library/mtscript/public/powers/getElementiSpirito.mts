[h: oToken = json.get(macro.args,0)]
[h: sSpirito = json.get(macro.args,1)]

[h: oSpirito = getSpirito(oToken,sSpirito)]
[h: lReturn = "[]"]
[h, if(!json.isEmpty(oSpirito)), code:{
	[lReturn = json.get(oSpirito,"Elementi")]
}]

[h: macro.return = lReturn]
