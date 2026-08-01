[h: source = arg(0)]
[h: target = arg(1)]
[h: iCells = arg(2)]
[h, if(argCount()>3): bCollision = arg(3); bCollision = 1]


[h: iCellSize = 50]
[h: iTry = 0]

[macro("utility/getCenterTokenXY@this"): source]
[h: x1 = json.get(macro.return,0)]
[h: y1 = json.get(macro.return,1)]

[macro("utility/getCenterTokenXY@this"): target]
[h: x2 = json.get(macro.return,0)]
[h: y2 = json.get(macro.return,1)]

[macro("utility/getSizePosMod@this"):target]
[h: fOffsetX2 = json.get(macro.return,0)]
[h: fOffsetY2 = json.get(macro.return,1)]

[h: x3 = x2]
[h: y3 = y2]

[h, if(x1 != x2 || y1 != y2): bFlag = 0; bFlag = 1]

[h: fK = x2-x1]
[h: fJ = y2-y1]
[h: fD = math.sqrt(fK^2+fJ^2)]

[h: switchToken(target)]
[h, if(!hasSight()), code:{
	[bCollision = 0]
	[broadcast(strformat("<span style='font-weight: bold; color: purple;'>ATTENZIONE: </span>%s@%s - Il token [%s] non ha vista abilitata",
		getMacroName(),getMacroLocation(),getName(target)),"gm")]
}]
[h: sSight = getSightType()]
[h: setSightType("Bersaglio")]

[h, while(bFlag==0), code:{
	[h: iToMove = (iCells-iTry)*iCellSize]
	[h: fH = math.sqrt((fD^2+2*fD*iToMove+iToMove^2)/(fK^2+fJ^2))]
	[h: x3 = x1+fH*fK]
	[h: y3 = y1+fH*fJ]
	[if(bCollision == 1 && iToMove != 0): bFlag = isVisible(x3,y3,target); bFlag = 1]
	[if(iCells>0):iTry = iTry+1; iTry = iTry-1]
}]

[h: x3 = round(x3 -fOffsetX2)]
[h: y3 = round(y3 -fOffsetY2)]
[h: setSightType(sSight)]
[h: moveToken(x3,y3,1,target)]