[h: source = arg(0)]
[h: target = arg(1)]

[h: iCellSize = 50]
[h: iDistance = 1]

[macro("utility/getCenterTokenXY@this"): source]
[h: x1 = json.get(macro.return,0)]
[h: y1 = json.get(macro.return,1)]

[macro("utility/getCenterTokenXY@this"): target]
[h: x2 = json.get(macro.return,0)]
[h: y2 = json.get(macro.return,1)]

[macro("utility/getSizePosMod@this"):target]
[h: fOffsetX2 = json.get(macro.return,0)]
[h: fOffsetY2 = json.get(macro.return,1)]

[h, if(x1 != x2 || y1 != y2): bFlag = 0; bFlag = 1]

[h: fA = y2-y1]
[h: fB = x2-x1]
[h, if(fB == 0), code:{
	[x3 = x2]
	[if(fA<0): iDirection = 1; iDirection = -1]
	[y3 = y2+iDirection*iCellSize*iDistance]
};{
	[h: fM = -fA/fB]
	[h, if(fB<0): iDirection = 1; iDirection = -1]
	[h: fXd = iDirection*math.sqrt((iDistance)^2/(1+fM^2))*iCellSize]
	[h: x3 = fXd+x2]
	[h: y3 = -fM*fXd+y2]
}]

[h: x3 = round(x3 -fOffsetX2)]
[h: y3 = round(y3 -fOffsetY2)]
[h: moveToken(x3,y3,1,source)]