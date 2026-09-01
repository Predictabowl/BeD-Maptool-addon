[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: oOrigine = json.get(macro.args,"origine")]


[h: spellName = "ToccoDelVampiro"]
[h: sFluff = fetchSpellProp(spellName,"nome_decorativo")]

[h, if(getState("Sanguinamento",target)): sDanno = "1d8"; sDanno = "1d4"]

[macro("powers/dmgSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spell",spellName,"danno",sDanno)]
[h: iDanno = json.get(macro.return,"danno")]


[macro("powers/curaSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",oOrigine,"curaLL",iDanno,"LL",1,"critRes",0,"spellName",spellName)]
[h: sMsg = popMessaggio(oOrigine,"strCura")]
[h: appendMessaggio(source,"strCura",sMsg)]

