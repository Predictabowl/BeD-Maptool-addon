[h: sAbilita = json.get(macro.args,0)]
[h: sClasse = json.get(macro.args,1)]

[h: oStat = getLibProperty(sAbilita,sClasse)]
[h: eventType = getStrProp(oStat,"evento")]
[h: macro.return = eventType]