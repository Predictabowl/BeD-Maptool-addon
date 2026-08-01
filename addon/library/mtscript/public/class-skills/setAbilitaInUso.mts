[h: source = json.get(macro.args,0)]
[h: sLibAbilita = json.get(macro.args,1)]

[h: sTag = "abilitaClasseInUso"]

[h: switchToken(source)]
[h: oAbilita = getDaMemoria(source,sTag)]
[h, if(json.type(oAbilita) != "OBJECT"): oAbilita = "{}"]
[h: oAbilita = json.set(oAbilita,sLibAbilita,1)]
[h: setInMemoria (source,sTag,oAbilita)]
