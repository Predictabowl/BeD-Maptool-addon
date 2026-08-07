[h: oToken = arg(0)]
[h: sNomeAb = arg(1)]
[h: iCooldown = arg(2)]

[h: oData = getDaMemoria(oToken,"estenuante-cooldown")]
[h, if(oData == ""): oData = "{}"]
[h: iValue = json.get(oData, sNomeAb)]
[h, if(!isNumber(iValue)): iValue = 0]
[h: iValue = iValue + iCooldown]
[h: oData = json.set(oData, sNomeAb, iValue)]
[h: setInMemoria(oToken, "estenuante-cooldown", oData)]

[h: eventInstaller(oToken, "On_Round_End", "estenuante-cooldown", "class_skills/estenuanteEndRoundUpdater@" + getMacroLocation())]
