[h: sLayer = json.get(macro.args, "layer")]

[h: sMap = getCurrentMapName()]
[h: lDrawings = findDrawings(sMap, "*")]

[h, if(sLayer == ""): sLayer = "TOKEN"]

[h, if(sLayer == "*"), code: {
	[lFiltered = lDrawings]
	[lDrawings = ""]
};{
	[lFiltered = ""]
}]

[h, foreach(id, lDrawings), code: {
	[if(getDrawingLayer(sMap, id) == sLayer): lFiltered = listAppend(lFiltered, id)]
}]

[h: iLast = listCount(lFiltered) -1]
[h: lastDraw = listGet(lFiltered, iLast)]
[h: macro.return = lastDraw]