[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "CaricaTravolgente")]

[h: bMuta = getState("Mutaforma",source)]
[h, if(bMuta): sDanno="d7"; sDanno="d5"]

[h: args = json.set("","source",source,"target",target,"spellName",spellName)]
[macro("powers/getAutoLL@lib:it.aldinucci.piero.bed.maptool.ruleset"):args]
[h: iLL = macro.return]

[h: iLPG = floor(getProperty("Livello",source)/3)+1]
[h: iCAP = getProperty("Car_Potenza",source)]
[h: iLA = iCAP + iLL]
[h: sBaseDmg = strformat( "%{iLPG}%{sDanno}" )]
[h: iMolt = 4]

[h: combatParam = json.set("","LA",iLA,"DannoArma",sBaseDmg,"moltiplicatore",iMolt)]
[h: dmgParam = json.set("","source",source,"target",target,"combatParam",combatParam,"opportunita",0)]
[macro("powers/dmgWeaponTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): dmgParam]

[h: moveTokenNearTarget(source,target)]