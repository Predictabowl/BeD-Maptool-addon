[h: idGM = isGM()]
[h, if(idGM == 1), code:{
	[h: name = nome]
	[h: listV=getLibProperty("VIP_List",getMacroLocation())]
	[if (listContains(listV,name) != 1), code:{
		[listV = listAppend(listV,name)]
		[setLibProperty("VIP_List",listV,getMacroLocation())]
	}]
}]