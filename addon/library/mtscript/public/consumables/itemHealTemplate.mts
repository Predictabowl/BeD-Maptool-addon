[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: sCura = json.get(macro.args,"cura")]
[h: sLibName = json.get(macro.args,"libName")]
[h: oUseParam = json.get(macro.args,"useParam")]

[macro("consumables/getItemAuto@this"): json.append(source,sLibName,oUseParam)]
[macro("powers/curaSpellTemplate@this"): json.set(macro.args,"spellName",sLibName,"curaLL",sCura,"LL",getLLOggetto(macro.return),"critRes",0)]