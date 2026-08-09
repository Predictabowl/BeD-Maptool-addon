[h: source = json.get(macro.args, "source")]
[h: target = json.get(macro.args, "target")]
[h: jEventParam = json.get(macro.args, "eventParam")]

[h: iDmg = json.get(jEventParam, "danno")]
[h: iAssorbito = json.get(jEventParam, "assorbito")] <!-- Not used as of now -->

[h, macro("core/getServitore@lib:it.aldinucci.piero.bed.maptool.ruleset"): source]
[h, if(macro.return == ""): return(0,"")]
[h: sServitore = macro.return]

[h: iSPV = getProperty("PV", sServitore)]
[h: iTansf = min(iSPV, iDmg)]
[h: switchToken(source)]
[h: PV = PV + iTansf]
[h: dannoTarget(json.set("", "target", sServitore, "valore", iTansf, "source", target, "ignoreReductions", 1))]

[h: macro.return = strformat("%s Danni trasferiti da %s a %s", iTansf, getName(source), getName(sServitore))]
