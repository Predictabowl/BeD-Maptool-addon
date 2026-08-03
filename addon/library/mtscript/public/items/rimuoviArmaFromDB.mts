<!-- DEPRECATED -->
[h: sArma = macro.args]
[h, if(sArma == ""): sArma = Nome_Arma]

[h: oArmi = getLibProperty("Armi_Json",getMacroLocation())]

[h, if(json.type(oArmi) != "OBJECT"): oArmi = "{}"]
[h: oArmi = json.remove(oArmi,sArma)]
[h: setLibProperty("Armi_Json",oArmi,getMacroLocation())]