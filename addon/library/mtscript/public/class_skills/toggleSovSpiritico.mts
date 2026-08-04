[h: oToken = arg(0)]

[h: jNecrofuriaData = getDaMemoria(oToken, "SovraccaricoSpiritico-data")]
[h, if(json.type(jNecrofuriaData) != "OBJECT"): jNecrofuriaData = "{}"]
[h: bActive = json.get(jNecrofuriaData, "active") != 1]
[h: jNecrofuriaData = json.set(jNecrofuriaData, "active", bActive)]
[h: setInMemoria(oToken, "SovraccaricoSpiritico-data", jNecrofuriaData)]
[h: macro.return = bActive]
