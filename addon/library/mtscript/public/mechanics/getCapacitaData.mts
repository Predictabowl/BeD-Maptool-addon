[h: oToken = arg(0)]
[h, if(argCount()>1): jOptions = arg(1); jOptions = "{}"]

[h: sTag = "CAPACITA_DATA"]


[h, if(json.contains(jOptions,"clearData")): delDaMemoria(oToken,sTag)]

[h: oData = getDaMemoria(oToken,sTag)]
[h, if(!json.isEmpty(oData)): return(0,oData)]


[macro("core/getListaCapacita@this"):0]
[h: lCap = macro.return]
[h: oDataCap = "{}"]
[h: iTot = 0]

[h, foreach(sCap,lCap), code:{
	[oCap = getProperty(sCap,oToken)]
	[if(listCount(oCap) != 2): return(0,"")]
	[iTot = iTot + listGet(oCap,1)]
	[oDataCap = json.set(oDataCap,sCap,oCap)]
}]

[h: oData = json.set("","totalePriorita",iTot,"dataCapacita",oDataCap)]

[h: setInMemoria(oToken,sTag,oData)]

[h: macro.return = oData]
