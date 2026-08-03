[h: source = json.get(macro.args,0)]
[h: sItemName = json.get(macro.args,1)]
[h: sTipoOggetto = arg(2)]

[macro("consumables/getPPOggetto@this"): json.append(source, sItemName, sTipoOggetto)]
[h: iPP = macro.return]
[h: iPA = getSpellPAzione(source, sItemName, 0, 0)]
[macro("consumables/getMMOggetto@this"): json.append(source, sItemName, sTipoOggetto)]
[h: iMM = macro.return]

[h: macro.return = json.set("",	"token",source,"PA",iPA,"PP",iPP, "MM", iMM)]
