[h: source = arg(0)]

[h: switchToken(source)]
[h: PA = PA +1]
[h: sNomeAb = "Perseveranza"]
[h: iAttivazioni = getDaMemoriaRound(source,sNomeAb)]
[h, if(!isNumber(iAttivazioni)): iAttivazioni = 0]
[h: iAttivazioni = iAttivazioni +1]
[h: setInMemoriaRound(source,sNomeAb,iAttivazioni)]

[h, macro("gui/putSkillToRoundUpdate@this"): json.append(source, sNomeAb, "PF")]

[h: appendMessaggio(source,"strAbilitaAttivata","+1 PA guadagnati")]
[h: execFunction("guiUpdateClassSkillResource", json.append(source, sNomeAb, "PF"), 0, "all")]
[h: return(0,0)]