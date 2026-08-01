[h: target = arg(0)]
[h: oAura = arg(1)]

[h: bTransitable = json.get(oAura, "isTransitable")]
[h, if(bTransitable != 1): return(0,0)]
[h: bMove = getDaMemoria(target,"isTokenMoving")]
[h, if(bMove != 1): return(0,0)]

[h: iAOE = json.get(oAura,"AOE")]
[h:switchToken(target)]
[h: aPath = getLastPath(0)]
[h: oOrigine = json.get(oAura,"origine")]
[h: sOrigine = json.get(oOrigine, 2)]
[h, foreach(jPoint, aPath), code :{
	[iPointX = json.get(jPoint, "x")]
	[iPointY = json.get(jPoint, "y")]
	[h: iDist = getDistanceToXY(iPointX,iPointY,0,sOrigine)]
	[if(iDist <= iAOE): return(0,1)]
}]

[h: macro.return = 0]
