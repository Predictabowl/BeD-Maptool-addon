[h: oArma = macro.args]


[h: oArmi = getLibProperty("Armi_Json",getMacroLocation())]

[h, if(json.type(oArmi) != "OBJECT"): oArmi = "{}"]

[macro("gui/generateId@this"): json.append(oArmi,json.get(oArma,"nome"))]
[h: sId = macro.return]
[h: oArmi = json.set(oArmi,sId,oArma)]
[h: setLibProperty("Armi_Json",oArmi,getMacroLocation())]

[h: macro.return = sId]