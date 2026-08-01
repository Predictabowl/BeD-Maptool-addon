[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: sNomeAb = json.get(macro.args,"nomeAbilita")]

[macro("class-skills/getAbilitaPassiva@this"): sNomeAb]
[h: oAbilita = macro.return]
[h: sFluff = json.get(oAbilita,"nomeDecorativo")]
[h: iLiv = getLivelloAbilita(source,sNomeAb)]

[macro.return = strformat("<br>START TEST MESSAGE<br>%s sta usando '%{sFluff}' (macro %s@%s) di livello %{iLiv} contro %s<br>END TEST MESSAGE",getName(source),getMacroName(),getMacroLocation(),getName(target))]