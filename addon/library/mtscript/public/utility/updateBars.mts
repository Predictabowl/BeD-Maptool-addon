[h: source = macro.args]
[h: switchToken(source)]
[h: bar.Health = PV/getPVMax(source)]
[h, if(isBarVisible("Mana")), code:{
	[iManaMax = getManaMax(source)]
	[h, if(iManaMax>0): bar.Mana = Mana/iManaMax]
}]
[h, if(isBarVisible("Fatica")), code:{
	[iPFMax = getPFMax(source)]
	 [if(iPFMax>0): bar.Fatica = PF/iPFMax]
}]
