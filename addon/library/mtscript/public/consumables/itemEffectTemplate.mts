[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: oEffetto = json.get(macro.args,"effetto")]
[h: sLibName = json.get(macro.args,"libName")]
[h: oUseParam = json.get(macro.args,"useParam")]

[macro("consumables/getItemAuto@this"): json.append(source,sLibName,oUseParam)]
[h: oOggetto = macro.return]
[macro("consumables/getCDOggetto@this"): oOggetto]
[h: iCD = macro.return]

[h: oParam = json.set("","source",source,"target",target,"spellName",sLibName,"LL",getLLOggetto(oOggetto),"CD",iCD,"effetto",oEffetto)]
[macro("powers/effectSpellTemplate@this"): oParam]