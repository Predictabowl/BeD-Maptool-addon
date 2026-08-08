[h: source = json.get(macro.args,"source")]

[h: spellName = "SacrificioDiSangue"]

[macro("core/getServitore@lib:it.aldinucci.piero.bed.maptool.ruleset"): source]
[h: oServitore = macro.return]
[h: iLL = getLL(json.set("","source",source,"spell",spellName))]
[h: iDanno = eval(strformat("%{iLL}d7"))]
[h: dannoTarget(json.set("","target",oServitore,"source",source,"valore",iDanno,"verbose",0))]
[h: sMsg = popMessaggio(oServitore,"strDanno")]

[h: eventUninstaller(source,"On_Action_End",spellName)]

[h: macro.return = sMsg]