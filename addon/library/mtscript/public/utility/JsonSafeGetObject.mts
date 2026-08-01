[h: oObj = arg(0)]
[h: sKey = arg(1)]

[h, if(json.type(oObj) != "OBJECT"): return(0,"")]
[h: macro.return = json.get(oObj,sKey)]