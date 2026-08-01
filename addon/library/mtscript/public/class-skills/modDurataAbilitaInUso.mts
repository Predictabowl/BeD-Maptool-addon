[h: source = arg(0)]
[h: sAbilita = arg(1)]

[h: sTag = "abilitaClasseInUso"]
[h: oAbilita = getDaMemoria(source,sTag)]
[h: iDurata = json.get(oAbilita,sAbilita)]
[h: oAbilita = json.set(oAbilita,sAbilita,iDurata+1)]
[h: setInMemoria(source,sTag,oAbilita)]