[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]


[h: switchToken(source)]
[h: spellName = "RimuoviVeleno"]

[macro("combat/getUltimoCritico@lib:it.aldinucci.piero.bed.maptool.ruleset"): source]
[h: critRes = macro.return]
[h, if(source == target && critRes == -1): critRes = 0]
[h: args = json.set("","source",source,"spellName",spellName)]
[macro("powers/getAutoLL@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.set(args,"critRes",critRes)]
[h: iLL = macro.return]

[macro("mechanics/RollRimuoviEffetto@lib:it.aldinucci.piero.bed.maptool.ruleset"):0]
[h: result = iLL+macro.return]

[h: msgOut= strformat("<br>Potenza di Rimozione: %{result} [Incantesimo non automatizzato, chiedi al GM]")]
[macro("utility/appendMessaggio@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","token",source,"key","strPotere","msg",msgOut)]