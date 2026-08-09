[h: source = json.get(macro.args,"source")]
[h: bConsume = json.get(macro.args,"consume")]

[macro("core/getServitore@lib:it.aldinucci.piero.bed.maptool.ruleset"): source]
[h: oServitore = macro.return]
[h, if(oServitore == ""): return(0,0)]

[h: spellName = "SacrificioEsplosivo"]

[h: eventInstaller(source,"On_Action_End",spellName,buildSpellMacroName("SacrificioEsplosivo","dannoServitore"))]

[h:macro.return = 1]