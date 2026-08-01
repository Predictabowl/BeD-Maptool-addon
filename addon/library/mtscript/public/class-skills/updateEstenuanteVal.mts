[h: oToken = arg(0)]
[h: sNomeAb = arg(1)]
[h: iValue  = arg(2)]

[h: oData = getDaMemoria(oToken, "estenuante-cooldown")]
[h: oData = json.set(oData, sNomeAb, iValue)]
[h: setInMemoria(oToken, "estenuante-cooldown", oData)]
