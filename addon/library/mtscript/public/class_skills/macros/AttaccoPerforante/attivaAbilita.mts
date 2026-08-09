[h: source = macro.args]

[macro("mobs/setDifendersi@lib:it.aldinucci.piero.bed.maptool.ruleset"): source]
[h: switchToken(source)]
[h: Pen_Base = Pen_Base + 5]

[h: appendMessaggio(source,"strAbilitaAttivata","+5 Penetrazione")]
[h: macro.return = 0]