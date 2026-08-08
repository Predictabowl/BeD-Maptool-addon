[h: source = json.get(macro.args,"source")]

[h: spellName = "SacrificioEsplosivo"]
[macro("core/getEffettoServitore@lib:it.aldinucci.piero.bed.maptool.ruleset"): source]
[macro("core/RemoveEffect@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,macro.return)]
[macro("events/eventUninstaller@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,"On_Action_End",spellName)]

[h: switchToken(source)]
[Lista_Dati = deleteStrProp(Lista_Dati,"SacrificioEsplosivoDanno")]