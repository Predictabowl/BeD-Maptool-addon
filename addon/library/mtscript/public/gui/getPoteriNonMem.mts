[h: target = json.get(macro.args,0)]

[h: oListaPot =  getLibroPoteri(target)]
[h: oMemList = getPoteriMem(target)]
[h: tempList = ""]
[h, foreach(item,oListaPot), code:{
	[if (!json.contains(oMemList,item)): tempList = json.append(tempList,item)]
}]

[h:return(0,tempList)]