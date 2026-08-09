[h: oToken = arg(0)]

[h: sNomeAb = "Perseveranza"]
[h: iPFBase = 5]
[h: iAttivazioni = getDaMemoriaRound(oToken,sNomeAb)]
[h, if(!isNumber(iAttivazioni)): iAttivazioni = 0]
[h: iPFBase = iPFBase + iAttivazioni]

[h: macro.return = iPFBase]