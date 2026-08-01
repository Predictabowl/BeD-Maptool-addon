[h: iX = arg(0)]
[h: iY = arg(1)]
[h: sDrawId = arg(2)]
[h, if(argCount()>3): bCell = arg(3); bCell = 1]


[h: aTokenCoord = json.append(iX,iY)]

[h: aPath = json.get(getDrawingInfo(getCurrentMapName(), sDrawId),"path")]

[h: iLen = json.length(aPath)]
[h: assert(iLen > 1, "Il draw ha meno di 2 punti")] 

[h: p1 = json.get(aPath,0)]
[h: fDistance = 100000000]
[h, for(i, 1, iLen), code:{
	[p2 = json.get(aPath,i)]
	[aParam = json.append(json.get(p1,"x"), json.get(p1,"y"), json.get(p2,"x"), json.get(p2,"y"))]
	[macro("distanzaPuntoSegmento@this"): json.merge(aTokenCoord, aParam)]
	[fDistance = math.min(macro.return, fDistance)]
	[p1 = p2]
}]

[h, if(bCell == 1), code:{
	[macro("getCellSize@this"): ""]
	[return(0, round(fDistance / macro.return))]
}]

[h: macro.return = fDistance]
