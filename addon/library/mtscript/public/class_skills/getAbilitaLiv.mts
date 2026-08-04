[h: source = arg(0)]
[h: sNomeAb = arg(1)]

[h, macro("class_skills/getAbilitaClasse@this"): json.append(source,sNomeAb)]
[h: oAbilita = macro.return]
[h: iLiv = ""]
[h, if(!json.isEmpty(oAbilita)): iLiv = json.get(oAbilita,"livello")]

[h, if(!isNumber(iLiv)): iLiv = 0]

[h: macro.return = iLiv]
