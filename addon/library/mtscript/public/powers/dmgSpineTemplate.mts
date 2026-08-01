[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: origine = json.get(macro.args,"origine")]
[h: spellName = json.get(macro.args,"spell")]
[h: sDanno = json.get(macro.args,"danno")]
[h: iLL = json.get(macro.args,"LL")]
[h: bCritico = json.get(macro.args,"critResult")]

[h: switchToken(source)]

[h, if(!isNumber(bCritico)): bCritico = 0]

[h: iLP = getLP(source,target,iLL,spellName)]

[macro("powers/getSpellCopertura@this"): json.set("", "target", target, "source", source, "spell", spellName, "isHelpful", 0)]
[h, if(macro.return): return(json.set("","LL",iLL,"LP",iLP,"danno",0))]

[macro("powers/checkSpellDifesa@this"): json.set("", "target", target, "source", source, "spell", spellName, "saveResult", 0, "isHarmful", 1)]
[h: sDifesa = macro.return]

[h:broadcast(sDifesa)]

[h: param = json.set("","LP",iLP,"dmgLP",sDanno,"spellName",spellName,"target",target,"source",origine,"critico",bCritico, "difesa", sDifesa)]
[macro("powers/getSpellDamage@this"): param]
[h: iDanno = macro.return]

[h: sRolledDice = popMessaggio(target,"spellRolledDice")]
[h: msgOut= strformat("Danno:<span title='%{sRolledDice}'> (%s) x %{iLP}</span>",sDanno)]

[h: param = json.set("","target",target,"source",origine,"valore",iDanno, "spellName", spellName, "verbose",0)]
[macro("core/DannoTarget@this"): param]

[h: discoverResistenzaBersaglio(spellName,origine,target)]

[h: macro.return = json.set("","LL",iLL,"LP",iLP,"danno",iDanno,"messaggio",msgOut)]