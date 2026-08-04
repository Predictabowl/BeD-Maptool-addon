[h: source = json.get(macro.args,0)]
[h: sAbilita = json.get(macro.args,1)]

[h: sTag = "abilitaClasseInUso"]
[h: oAbilita = getDaMemoria(source,sTag)]
[h: macro.return = json.get(oAbilita,sAbilita)]
