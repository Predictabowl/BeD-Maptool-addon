[h: source = arg(0)]
[h: sAbilita = arg(1)]

[h: oArgs = macro.args]

[macro("class-skills/getAbilitaPF@this"): oArgs]
[h: iPF = macro.return]
[macro("class-skills/getAbilitaPA@this"): oArgs]
[h: iPA = macro.return]
[macro("class-skills/getAbilitaPP@this"): oArgs]
[h: iPP = macro.return]
[macro("class-skills/getAbilitaMM@this"): oArgs]
[h: iMM = macro.return]
[macro("class-skills/getAbilitaMana@this"): oArgs]
[h: iMana = macro.return]

[h: macro.return = canPayAction(json.set("","token",source,"PA",iPA,"PF",iPF,"MM", iMM, "PP", iPP, "mana", iMana))]
