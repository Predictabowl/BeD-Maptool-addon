[h: oToken = json.get(macro.args,0)]
[h: sSpirito = json.get(macro.args,1)]


[h, if(sSpirito != ""), code:{
	[h: lPoteri = getPoteriSpirito(oToken,sSpirito)]
	[addPoteriMem(oToken,lPoteri)]
	[macro("powers/setSpiritoAttivo@this"):json.append(oToken,sSpirito)]
}]
