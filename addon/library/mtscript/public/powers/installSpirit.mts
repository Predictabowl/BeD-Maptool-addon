[h: oToken = arg(0)]
[h: sNome = arg(1)]
[h: oData = arg(2)]

[h: switchToken(oToken)]
[h: jSpiriti = json.get(Spiriti_Data, "SPIRITI")]
[h: jSpiriti = json.set(jSpiriti,sNome,oData)]
[h: Spiriti_Data = json.set(Spiriti_Data,"SPIRITI", jSpiriti)]
