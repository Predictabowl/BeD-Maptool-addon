[h: source = macro.args]

[h: switchToken(source)]
[h: PA = PA +1]
[h: sNomeAb = "Perseveranza"]
[h: iAttivazioni = getDaMemoriaRound(source,sNomeAb)]
[h, if(!isNumber(iAttivazioni)): iAttivazioni = 0]
[h: iAttivazioni = iAttivazioni +1]
[h: setInMemoriaRound(source,sNomeAb,iAttivazioni)]

[macro("gui/updateDialogAbilita@lib:it.aldinucci.piero.bed.maptool.ruleset"): source]

[h: appendMessaggio(source,"strAbilitaAttivata","+1 PA guadagnati")]
[h: macro.return = 0]