[h: oToken = arg(0)]
[h: sNome = arg(1)]

[h: switchToken(oToken)]
[h: lSpiriti = json.get(Spiriti_Data,"SPIRITI")]

[h, if(!json.isEmpty(lSpiriti)): oData = json.get(lSpiriti,sNome); oData = "{}"]

[h: macro.return = oData]
