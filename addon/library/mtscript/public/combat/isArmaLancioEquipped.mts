[h: oToken = arg(0)]

[macro("combat/isStile1A@this"): oToken]
[h, if(!macro.return): return (0,0)]

[h: switchToken(oToken)]
[h: oArma = getArma(oToken,2)]
[h, if(!json.isEmpty(oArma)), code:{
	[macro("items/isArmaLancio@this"): oArma]
	[return(0, macro.return)]
}]

[if(listGet(Armi_Equipaggiate, 1) != ""): return(0,1); return(0,0)]
