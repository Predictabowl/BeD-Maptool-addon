[h: source = macro.args]
[h: switchToken(source)]
[h: bar.Health = PV/getPVMax(source)]
[h, if(isBarVisible("Mana")), code:{
	[h, if(Mana_Max>0): bar.Mana = Mana/Mana_Max]
}]
[h, if(isBarVisible("Fatica")), code:{
	 [if(PF_Max>0): bar.Fatica = PF/PF_Max]
}]
