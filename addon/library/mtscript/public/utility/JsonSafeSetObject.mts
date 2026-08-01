[h: oObj = arg(0)]
[h: sKey = arg(1)]
[h: oChild = arg(2)]

[h, if(!json.type(oObj) != "OBJECT"): oObj = "{}"]
[h: json.set(oObj,sKey,oChild)]

[h: macro.return = oObj]