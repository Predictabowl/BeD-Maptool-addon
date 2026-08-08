[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: origine = json.get(macro.args,"origine")]
[h: iLL = json.get(macro.args,"LL")]
[h: bCrit = json.get(macro.args,"critResult")]
[h: sDanno = json.get(macro.args,"dannoLP")]
[h: iMaxDist = json.get(macro.args,"maxDist")]
[h: spellName = json.get(macro.args,"spellName")]

[h: iDistance = getDistance(target,0,source)]
[h, if(iDistance > iMaxDist): return(0,"")]


[h: fluffName = fetchSpellProp(spellName,"nome_decorativo")]

[macro("powers/dmgSpineTemplate@this"): json.set(macro.args,"spell",spellName,"danno",sDanno,"critResult",bCrit)]
[h: iLP = json.get(macro.return,"LP")]
[h: sSpineMsg = json.get(macro.return,"messaggio")]

[macro("core/RemoveEffect@this"):json.append(source,fluffName)]

[h: msgOut= strformat("<img src='%s' width='25' height='25' />&nbsp;<b>%s</b> si attiva contro %s (%{sSpineMsg})",
	getImage(spellName),fluffName,getName(target))]

[h: sMsgDifesa = popMessaggio(source, "difesaResult")]
[h: sMsgCopertura = popMessaggio(source, "coperturaResult")]
[h, if(sMsgDifesa != "" && sMsgCopertura != ""): sMsgDifesa = sMsgDifesa + "<br>"]
[h: sMsgDifesa = sMsgDifesa + sMsgCopertura]
[h, if(sMsgDifesa != ""): msgOut = strformat("%{msgOut}<div style='margin-left: 25px; vertical-align:top;'>%{sMsgDifesa}</div>")]


[h: macro.return = msgOut]