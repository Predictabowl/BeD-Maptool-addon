[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: sMana = json.get(macro.args,"mana")]
[h: sLibName = json.get(macro.args,"libName")]
[h: oUseParam = json.get(macro.args,"useParam")]

[macro("consumables/getItemAuto@this"): json.append(source,sLibName,oUseParam)]
[h: oOggetto = macro.return]

[h: iMana = eval(string(sMana))]
[h: recuperaMana(source,iMana)]
[h: appendMessaggio(source,"strCura",popMessaggio(source,"msgManaRegen"))]