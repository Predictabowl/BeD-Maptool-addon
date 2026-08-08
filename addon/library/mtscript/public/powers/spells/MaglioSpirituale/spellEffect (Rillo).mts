[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: spellName = "MaglioSpirituale")]

[h: args = json.set("","source",source,"target",target,"spellName",spellName)]
[macro("powers/getAutoLL@lib:it.aldinucci.piero.bed.maptool.ruleset"):args]
[h: iLL = macro.return]

[h: iLPG = floor(getProperty("Livello",source)/6)+2]
[h: iCAP = getProperty("Car_Potenza",source)]
[h: iLA = iCAP + iLL]
[h: sBaseDmg = strformat( "%{iLPG}d8" )]
[h: iMolt = 3]

[h: args = json.set("","source",source,"target",target,"spell",spellName,"LA",iLA,"baseDmg",sBaseDmg,"moltiplicatore",iMolt)]
[macro("powers/getSpellLADamage@lib:it.aldinucci.piero.bed.maptool.ruleset"):args]
[h: iDanno = macro.return]

[h: msgOut= strformat("<br>Danno: %{sBaseDmg} LA: %{iLA} Moltiplicatore: %{iMolt}")]
[macro("utility/appendMessaggio@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","token",source,"key","strPotere","msg",msgOut)]

[h: param = json.set("","target",target,"source",source,"valore",iDanno,"verbose",0)]
[macro("core/DannoTarget@lib:it.aldinucci.piero.bed.maptool.ruleset"): param]

[macro("powers/generaSpellMsg@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append("",source,target)]