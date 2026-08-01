[h: target = json.get(macro.args,"target")]
[h: bRemove = json.get(macro.args,"remove")]
[h: imgAsset = json.get(macro.args,"parametri")]

[h: aTableNames = getTableNames("json")]
[h: switchToken(target)]
[h, if(bRemove == 1), code:{
	[if(!json.contains(aTableNames, target)): return(0,"")]	
	[sOriginalImg = getTableImage(target)]
	[setTokenImage("asset://"+sOriginalImg)]
	[deleteTable(target)]
	[return(0,"")]
}]

[h, if(json.contains(aTableNames, target)): return(0,"")]

[h: sOriginalImg = getTokenImage()]
[h: createTable(target,true,false,sOriginalImg)]
[h: setTokenImage(imgAsset)]
[h: macro.return = ""]