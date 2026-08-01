<!-- vecchia versione, utilizza le coordinate sulla griglia invece dei pixel.
Il difetto è che richiede di leggere la variabile globale per conoscere il tipo di griglia
mentre quello nuovo non ne ha bisogno -->
[h: broadcast("DEPRECATED: "+getMacroName()+"@"+getMacroLocation())]
[h: source = json.get(macro.args,0)]
[h: target = json.get(macro.args,1)]
[h, if(json.length(macro.args) > 2): bOpp = json.get(macro.args,2); bOpp = 0]

[macro("core/getSizePosMod@this"): target]
[h: offset = macro.return]
[h: offset = 0]
[h: tx = getTokenX(0,target)+offset] 
[h: ty = getTokenY(0,target)+offset]
[h: sx = getTokenX(0,source)]
[h: sy = getTokenY(0,source)]
[h: type = getProperty("Grid_Type","MapVar")]

[h, if(type == "v_spezzata"), code:{
	[if (math.isEven(ty)): tx = tx-0.5]
	[if (math.isEven(sy)): sx = sx-0.5]
}]
[h, if(type == "o_spezzata"), code:{
	[if (math.isEven(tx)): ty = ty-0.5]
	[if (math.isEven(sx)): sy = sy-0.5]
}]

[h: alfa = getTokenFacing(target)]

[h, if(sx == tx), code:{
	[lambda = 90]
};{
	[m = (sy-ty)/(sx - tx)]
	[macro("mod@Lib:MetodiVari"):json.append(math.atan(m),180)]
	[lambda = macro.return]
}]


[h, if (sy<ty), code:{
	[lambda = lambda + 180]	
};{
	[if((sy==ty) && (sx<tx)), code:{
		[lambda = lambda + 180]
	}]
}]
[macro("mod@Lib:MetodiVari"):json.append(lambda+alfa,360)]
[h: lambda = macro.return]


[h, if((lambda >= 116) && (lambda <= 244)), code:{
	[h: macro.return = "spalle"]
};{
	[h: macro.return = "fronte"]
}]

[h, if(bOpp == 1): macro.return = "spalle"]

[h: override = getProperty("Spalle_Override",target)]
[h, if(override > 0): macro.return = "spalle"]
[h, if(override < 0): macro.return = "fronte"]