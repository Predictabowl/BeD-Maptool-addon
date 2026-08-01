[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: spellName = json.get(macro.args,"spell")]
[h: sDanno = json.get(macro.args,"danno")]
[h: iLL = json.get(macro.args,"LL")] <!-- Opzionale -->
[h: iLP = json.get(macro.args,"LP")] <!-- Opzionale -->
[h: critRes = json.get(macro.args,"critRes")] <!-- Opzionale -->
[h: sElement = json.get(macro.args,"element")] <!-- Opzionale -->
[h: iCritFailTS = json.get(macro.args, "CritFailTS")] <!-- Opzionale -->
[h: fPercMod = json.get(macro.args, "percMod")] <!-- Opzionale -->

[h: switchToken(source)]

[h, if(critRes == ""): critRes = getUltimoCritico(source)]

[h, if(!isNumber(iLL)), code:{
	[h: args = json.set("","source",source,"target",target,"spellName",spellName,"critRes",critRes)]
	[macro("powers/getAutoLL@this"):args]
	[h: iLL = macro.return]
}]

[h, if(!isNumber(iLP)), code:{
	[h: param = json.set("","source",source,"target",target,"LL",iLL,"spellName",spellName, "element", sElement)]
	[h: iLP = getLP(param)]
}]

[h: param = json.set("","LP",iLP,"dmgLP",sDanno,"spellName",spellName,"target",target,"source",source, "critFailTS", iCritFailTS,
 "percMod", fpercMod)]
[macro("powers/getSpellDamage@this"): param]
[h: iDanno = macro.return]

[h: sRolledDice = popMessaggio(target,"spellRolledDice")]

[h: msgOut= strformat("Danno:<span title='%{sRolledDice}'> (%s) x %{iLP}</span>",sDanno)]
[h: appendMessaggio(source,"strSpellDamage",msgOut)]

[h: param = json.set("","target",target,"source",source,"valore",iDanno, "spellName", spellName, "verbose",0)]
[macro("core/DannoTarget@this"): param]

[h: macro.return = json.set("","LL",iLL,"LP",iLP,"danno",iDanno)]

