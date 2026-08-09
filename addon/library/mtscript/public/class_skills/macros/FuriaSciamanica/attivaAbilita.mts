[h: source = arg(0)]

[h:sNomeAb = "FuriaSciamanica"]

[h, macro("class_skills/activateSovSpiritico@lib:it.aldinucci.piero.bed.maptool.ruleset"): source]
[h: jSovSpiritico = macro.return]

[h: switchToken(source)]
[h, if(json.get(jSovSpiritico,0)): fMod = 0.24; fMod = 0.12]

[h: sMsg = strformat("%+d MDI. %s", floor(fMod*100), json.get(jSovSpiritico, 1))]
[h: appendMessaggio(source,"strAbilitaAttivata",sMsg)]
[h: setInMemoria(source, sNomeAb, fMod)]
[h: Mod_Danno_Out = Mod_Danno_Out + fMod]

[h: macro.return = 0]