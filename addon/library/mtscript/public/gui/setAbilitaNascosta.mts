[h: target = json.get(macro.args,0)]
[h: sAbilita = json.get(macro.args,1)]
[h: bNascondi = json.get(macro.args,2)]

[macro("core/getAbilitaClasse@this"): macro.args]
[h: oAbilita = macro.return]

[h: oAbilita = json.set(oAbilita,"nascondiInScheda",bNascondi)]

[macro("core/setAbilitaClasse@this"): json.append(target,sAbilita,oAbilita)]