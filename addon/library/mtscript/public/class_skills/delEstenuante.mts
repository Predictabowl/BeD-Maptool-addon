[h: oToken = arg(0)]
[h: sNomeAb = arg(1)]

[h: oData = getDaMemoria(oToken,"estenuante-cooldown")]
[h, if(oData == ""): return(0,"")]
[h: oData = json.remove(oData, sNomeAb)]
[h: setInMemoria(oToken, "estenuante-cooldown", oData)]

[h: macro.return = ""]
