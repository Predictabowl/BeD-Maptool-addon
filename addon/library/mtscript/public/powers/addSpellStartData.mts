[h: oToken = arg(0)]
[h: sTag = arg(1)]
[h: oData = arg(2)]

[h: sLabel = "spellStartData"]

[h: oSpellData = getDaMemoria(oToken,sLabel)]
[h, if(json.type(oSpellData) != "OBJECT"): oSpellData = "{}"]
[h: oSpellData = json.set(oSpellData,sTag,oData)]
[h: setInMemoria(oToken,sLabel,oSpellData)]