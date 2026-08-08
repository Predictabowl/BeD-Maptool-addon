[h: source= json.get(macro.args,"source")]
[h: iCD = json.get(macro.args,"CD")]
[h: eventParam = json.get(macro.args,"eventParam")]

[h: oEffetto = json.get(eventParam,"effetto")]

[macro("core/isEffectHarmful@lib:it.aldinucci.piero.bed.maptool.ruleset"): oEffetto]
[h, if(macro.return != 1): return(0, "")]


[h: msgOut = ""]
[h: spellName = "MaledizioneAmplificazione"]
[h: nomeDec = fetchSpellProp(spellName,"nome_decorativo")]
[h: sEffetto = json.get(oEffetto,"effetto")]

[h: msgOut = strformat("%{msgOut}<br><img src='%s' width='25' height='25' /> %s. ",getImage(spellName),nomeDec)]
[h: msgOut = strformat("%{msgOut} La potenza di %{sEffetto} su %s viene incrementata di +1",getName(source))]

[h: macro.return = msgOut]