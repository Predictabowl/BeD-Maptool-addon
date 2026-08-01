[h: sDrawId = arg(0)]
[h, if(argCount()>1): sMap = arg(1); sMap = getCurrentMapName()]

[h: jInfo = getDrawingInfo(sMap, sDrawId)]
[h: jPath = json.get(jInfo, "path")]
[h: macro.return = json.set("","shape","polygon" ,"points",jPath)]
