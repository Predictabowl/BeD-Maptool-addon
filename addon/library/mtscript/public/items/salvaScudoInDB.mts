[h: oArma = macro.args]

[h: sProperty = "Scudi_Json"]

[h: oArmi = getLibProperty(sProperty,getMacroLocation())]

[h, if(json.type(oArmi) != "OBJECT"): oArmi = "{}"]

[macro("gui/generateId@this"): json.append(oArmi,json.get(oArma,"nome"))]
[h: sId = macro.return]

[h: sNomeA = json.get(oArma,"nome")]
[h: oArmi = json.set(oArmi,sId,oArma)]
[h: setLibProperty(sProperty,oArmi,getMacroLocation())]

[h: macro.return = sId]