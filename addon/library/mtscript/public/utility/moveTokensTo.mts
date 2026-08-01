[h: lMapList = getAllMapNames()]
[h: bCheck = input(strformat("sNomeMappa|%{lMapList}|Scegli Mappa|LIST|value=string"))]

[h, if(!bCheck):oTokens = "{}"; oTokens = getSelected("json")]

[h, foreach(oToken,oTokens), code:{
	[iX = getTokenX(0,"MapVar",sNomeMappa)]
	[iY = getTokenY(0,"MapVar",sNomeMappa)]	
	[h: moveTokenToMap(oToken,sNomeMappa,iX,iY,0)]
}]
