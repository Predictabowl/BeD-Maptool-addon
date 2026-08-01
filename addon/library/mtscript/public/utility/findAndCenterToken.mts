[h: oToken = arg(0)]

[h: target = findToken(oToken)]
[h, if(target != ""), code:{
	[goto(target)]
	[return(0,"")]
}]

[h: aMaps = getAllMapNames("json")]

[h, foreach(sMap, aMaps), code:{
	[target = findToken(oToken, sMap)]
	[h, if(target != ""), code:{
		[setCurrentMap(sMap)]
		[goto(target)]
		[return(0,"")]
	}]	
}]
