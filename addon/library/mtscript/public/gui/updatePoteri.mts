[h: sFrame = arg(0)]
[h, if(sFrame == ""): sFrame = "Poteri"]
[h, if(argCount()>1): sCacheAction = arg(1); sCacheAction = ""]
[h, if(argCount()>2): jOptions = arg(2); jOptions = ""]


[h: oToken = json.get(getFrameProperties(sFrame), "value")]

[h, switch(sCacheAction), code:
	case "clearOffensivi":{
		[macro("gui/delPoteriOffensiviCache@this"): oToken]
	};
	case "clearAll":{
		[delDaCache(oToken,"SpellStats")]		
	};
	default:{}
]

[h, if(json.contains(jOptions, "forceVisible")), code:{
	[macro("gui/listaPoteriMem@this"): oToken]
};{
	[macro("gui/updateFrameIfVisible@this"): json.append("",oToken,sFrame,"gui/listaPoteriMem@this")]
}]
