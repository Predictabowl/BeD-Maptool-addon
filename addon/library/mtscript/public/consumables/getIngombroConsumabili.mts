[h: oToken = arg(0)]

[h: iNum = countSlotVeloceItems(oToken)]
[h: iIng = 0]
[h, for(i,0,iNum), code:{
	[oItem = getFromSlotVeloce(oToken,i)]
	[iIng = iIng + getItemIngombro(oItem)]
}]

[h: macro.return = iIng]