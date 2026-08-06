[h: sTarget = listGet(getSelected(), 0)]
[h, if(sTarget == ""): sTarget = "MapVar"]

[h: iX = getTokenX(0, sTarget)]
[h: iY = getTokenY(0, sTarget)]	

[h, macro("crud/GetPCTokens@this"):""]
[h: aTokens = macro.return]

[h: i = 0]
[h, foreach(sToken, aTokens), code:{
    [sMap = getTokenMap(sToken)]
    [offsetX = math.mod(i+1,3)-1]
    [offsetY = math.mod(floor(i/3)+1,3)-1]
	[moveTokenFromMap(sToken,sMap, iX+offsetX, iY+offsetY,0)]
    [oPartner = getServitore(sToken)]
    [if(oPartner != ""): moveTokenToMap(oPartner,sMap, iX+offsetX, iY+offsetY,0)]
    [i = i +1]
}]

[h: execFunction("setCurrentMap", json.append("",getCurrentMapName()),0,"not-gm")]
[h: execFunction("goto", json.append("", sTarget),0,"not-gm")]
