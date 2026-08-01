[h: idAttacker = arg(0)]
[h: idDefender = arg(1)]

[h: iPerturbazione = getPerturbazionePoteri(idAttacker)]
[h: iConcentrazione = getConcentrazionePoteri(idDefender)]
[h: iRoll = roll(1,100)]

[h, if(iRoll + iPerturbazione >= iConcentrazione): bConc = 0; bConc = 1]

[h: sMsg = strformat("1d100 %+d => %{iRoll} %+d = %d [%{iConcentrazione}]",iPerturbazione, iPerturbazione, iRoll+iPerturbazione)]
[h: appendMessaggio(idDefender,"msgRollConcentrazione",sMsg)]

[h: macro.return = json.append(bConc,iRoll,iPerturbazione,iConcentrazione)]