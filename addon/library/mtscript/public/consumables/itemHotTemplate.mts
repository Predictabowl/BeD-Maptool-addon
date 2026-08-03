[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: sCura = json.get(macro.args,"cura")]
[h: sLibName = json.get(macro.args,"libName")]
[h: oUseParam = json.get(macro.args,"useParam")]

[macro("consumables/getItemAuto@this"): json.append(source,sLibName,oUseParam)]
[macro("powers/rigeneraVitaTemplate@this"): json.set("","source",source,"target",target,"curaLL",sCura,"spellName",sLibName,"LL",getLLOggetto(macro.return))]
