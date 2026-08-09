<!-- Biene chiamata se è presente il tag MACRODISTRUTTIVA -->
[h: source =macro.args]

[h: iBonusDurata = 2]
[macro("core/pushStatModifier@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,"durataMod",iBonusDurata)]