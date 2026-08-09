[h: source = json.get(macro.args,"source")]
[h: bConsume = json.get(macro.args,"consume")]

[macro("core/getServitore@lib:it.aldinucci.piero.bed.maptool.ruleset"): source]
[h: oServitore = macro.return]
[h, if(oServitore == ""): return(0,0)]

[h: spellName = "SacrificioDiSangue"]

[h: eventInstaller(source,"on_Action_End",spellName,"spells/SacrificioDiSangue/dannoServitore@lib:it.aldinucci.piero.bed.maptool.ruleset")]

[h:macro.return = 1]