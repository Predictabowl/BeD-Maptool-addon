[h: source = json.get(macro.args,0)]
[h: sNomeAb = json.get(macro.args,1)]

[macro("class_skills/getAbilitaClasse@this"): macro.args]
[h: oAbilita = macro.return]
[h: bBlock = json.get(oAbilita,"blockOverride")]
[h, if(!isNumber(bBlock)): bBlock = 0]

[h: macro.return = bBlock]