[h: target = macro.args]
[h: switchToken(target)]

[h: setHalo("None", target)]
[h: Azione_Corrente = "{}"]
[h: AzioneGM=""]

[macro("mobs/delOpportunita@this"):target]
[h: clearStatModifiers(target)]
[h: clearSpellStartData(target)]

[macro("events/eventUninstaller@this"): json.set("","name","spellCastingInterruption","event","On_Hitted","token",target)]