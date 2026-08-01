[h: target = listGet(getSelected(),0)]
[h: bPC = isPC(target)]

[h, if(bPC): oParams = json.set("","pc",0,"npc",1); oParams = json.set("","pc",1,"npc",0)]
[h: oRange = json.set("","token",target,"upto",5)]
[h: oParams = json.set(oParams,"range",oRange,"layer","TOKEN")]
[h: tokenList = getTokens(",",oParams)]
[h: sNames = ""]
[h,foreach(id,tokenList), code:{
	[sNames = listAppend(sNames,getName(id))]
}]

[h: bCheck = input("source|"+sNames+"|Scegli l'attaccante|LIST")]
[h, if(bCheck), code:{
	[h: source = listGet(tokenList,source)]
	[switchToken(source)]
	[Lista_Dati = setStrProp(Lista_Dati,"oppTarget",target)]
	[macro("pushOpportOverride@this"):source]
	[broadcast(strformat("%s ha un attacco di opportunit&agrave contro %s",getName(source),getName(target)),"gm")]
}]
