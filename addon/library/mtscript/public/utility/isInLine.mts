[h: source = arg(0)]
[h: target = arg(1)]
[h: bersaglio = arg(2)]

[macro("getCenterTokenXY@this"): source]
[h: sx = json.get(macro.return,0)]
[h: sy = json.get(macro.return,1)]
[macro("getCenterTokenXY@this"): bersaglio]
[h: bersaglioX = json.get(macro.return,0)]
[h: bersaglioY = json.get(macro.return,1)]
[macro("getCenterTokenXY@this"): target]
[h: tx = json.get(macro.return,0)-sx]
[h: ty = json.get(macro.return,1)-sy]


[h: quadrantCheck = (((bersaglioX-sx)*tx) + ((bersaglioY-sy)*ty) >= 0)]
[h, if(!quadrantCheck): return(0,0)]

[h: aX = bersaglioY-sy]
[h: bY = sx-bersaglioX]

[h: offsetTX = getTokenWidth(target)]
[h: offsetTY = getTokenHeight(target)]
[h: targetRadius = max(offsetTX,offsetTY)/2]

[h, if(math.abs(bY) > 1), code:{
	[h: m = -aX/bY]
	[h: fDistance = math.abs(ty - m*tx)/math.sqrt(m^2 + 1)]
};{
	[fDistance = math.abs(tx)]
}]
[h, if(fDistance > targetRadius): bResult = 0; bResult = 1]

[h: macro.return = bResult]