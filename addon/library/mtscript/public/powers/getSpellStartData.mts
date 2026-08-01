[h: oToken = arg(0)]
[h: sTag = arg(1)]

[h: sLabel = "spellStartData"]

[h: oSpellData = getDaMemoria(oToken,sLabel)]
[h, if(json.type(oSpellData) != "OBJECT"): oSpellData = "{}"]
[h: macro.return = json.get(oSpellData,sTag)]
