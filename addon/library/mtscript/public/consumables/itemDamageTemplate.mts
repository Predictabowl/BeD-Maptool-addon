[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: sDanno = json.get(macro.args,"danno")]
[h: sLibName = json.get(macro.args,"libName")]
[h: oUseParam = json.get(macro.args,"useParam")]

[macro("consumables/getItemAuto@this"): json.append(source,sLibName,oUseParam)]
[macro("powers/dmgSpellTemplate@this"): json.set(macro.args,"spell",sLibName,"danno",sDanno,"LL",getLLOggetto(macro.return))]
