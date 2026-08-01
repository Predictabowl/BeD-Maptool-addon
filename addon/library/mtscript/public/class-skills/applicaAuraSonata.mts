[h: sOrigine = arg(0)]
[h: iMolt = arg(1)]

[h: sCaster = sOrigine]
[h, if(iMolt > 0): sTipoBersaglio = "ALLEATI"; sTipoBersaglio="NEMICI"]

<!-- Effetto che viene applicato dal auraEffectMacro -->
[macro("class-skills/getEffettoSonata@this"): json.append(sOrigine,iMolt)]
[h: aMotivoScelto = macro.return]
[h, if(json.isEmpty(aMotivoScelto)): return(0,0)]
[macro("class-skills/createEffettoSonata@this"): json.append(macro.return,sTipoBersaglio)]
[h: oEffetto = macro.return]
[h: iColore = 0]
[h: iDurata = -1]
[h: iLivAoE = getLivelloAbilita(sOrigine,"SonataEstesa")]
[h: iAOE = 4+iLivAoE]
[h: idAura = "Sonata Bardica"]

[h: paramA = json.set("","source",sOrigine,"caster",sCaster,"nomeAura", idAura,"durata",iDurata,"AOE",iAOE,"tipo","fisico","FOF",sTipoBersaglio,"visualizza", iColore, "macroParam", oEffetto)]

[macro("powers/effectApplyAura@this"): paramA]
[appendMessaggio(sOrigine,"strAbilitaAttivata",strformat(": %s", json.get(aMotivoScelto,0)))]
[h: macro.return = 1]