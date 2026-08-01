[h: oP1 = arg(0)]
[h: oP2 = arg(1)]
[h: sDrawId = arg(2)]

[h: iX1 = getTokenX(1, oP1)]
[h: iY1 = getTokenY(1, oP1)]
[h: iX2 = getTokenX(1, oP2)]
[h: iY2 = getTokenY(1, oP2)]

[h: jPoint = json.set("","x", iX1, "y", iY1)]
[h: iNumPoints = 10]
[h: iDeltaX = floor((iX1-iX2)/iNumPoints)]
[h: iDeltaY = floor((iY2-iY2)/iNumPoints)]

[h: aPath = json.append("", jPoint)]
[h: i = 1]
[h, while(i<iNumPoints), code :{
	[jPoint = json.set("","x", iX1-iDeltaX*i, "y", iY1-iDeltaY*i)]
	[aPath = json.append(aPath,jPoint)]
	[i = i+1]
}]

[h: jPoint = json.set("","x", iX2, "y", iY2)]
[h: aPath = json.append(aPath, jPoint)]

[h: aCrossed = movedOverDrawing(getCurrentMapName(), sDrawId, aPath)]
[h, if(json.isEmpty(aCrossed)): return(0,0)]
[h: macro.return = 1]