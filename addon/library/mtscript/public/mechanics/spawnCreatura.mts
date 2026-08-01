[h, if(json.type(macro.args) == "OBJECT"), code:{
	[h: source = json.get(macro.args,"source")]
	[h: sSpawner = json.get(macro.args,"spawner")]
	[h: sNome = json.get(macro.args,"nome")]
	[h: sSize = json.get(macro.args,"size")]
	[if (sSize == ""): sSize = "Medium"]
	[h: sLabel = json.get(macro.args,"label")]
};{
	[h: source = json.get(macro.args,0)]
	[h: sSpawner = json.get(macro.args,1)]
	[h: sNome = json.get(macro.args,2)]
	[if(json.length(macro.args)>3): sSize=json.get(macro.args,3); sSize = "Medium"]
	[if(json.length(macro.args)>4): sLabel=json.get(macro.args,4); sLabel = ""]
}]


[h, if(sNome == ""): sNome = sSpawner]

[macro("mechanics/createTokenName@this"): json.append(source,sNome)]
[h: sTokenNome = macro.return]
[h, if(sLabel == ""): sLabel = getName(source)]

[macro("mechanics/getSpawnImages@this"): json.append(source,sNome)]
[h: jImages = macro.return]

[h: oToken = findToken(sTokenNome)]
[h: oSpawner = findToken(sSpawner)]

[h, if(oToken == ""), code:{
	[if(oSpawner == ""): sMappa = "Librerie"; sMappa = getCurrentMapName()]	
	[macro("powers/spawnTokenBersaglio@this"): source]
	[h: oBersaglio = macro.return]
	[h: iSX = getTokenX(0,oBersaglio)]
	[h: iSY = getTokenY(0,oBersaglio)]
	[h: oUpdates = json.set(jImages,"name",sTokenNome,"x",iSX,"y",iSY,"size",sSize,"label",sLabel)]
	[h: oToken = copyToken(sSpawner,1,sMappa,oUpdates)]
}]

[h: macro.return = oToken]