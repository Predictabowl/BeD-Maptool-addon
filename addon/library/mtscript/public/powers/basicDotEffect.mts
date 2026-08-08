[h: target = json.get(macro.args,"target")]
[h: bRemove = json.get(macro.args,"remove")]
[h: oParams = json.get(macro.args,"parametri")]
[h: oOtherInfo = json.get(macro.args, "otherInfo")]

[h: sMsg = ""]


[h, if(bRemove == 1), code:{
	[sEffettoAux = json.get(oParams,"effettoAux")]
	[rimuoviEffetto(target,sEffettoAux)]
	[return(0,sMsg)]
}]

[h: sDanno = string(json.get(oParams,"danno"))]
[h: iLL = json.get(oParams,"LL")]
[h: iLP = json.get(oParams,"LP")]
[h: spellId = json.get(oParams,"spellLib")]
[h: oOrigine = json.get(oParams,"lanciatore")]
[h: bCrit = json.get(oParams,"critRes")] <!-- Opzionale -->
[h: fPCrit = json.get(oParams,"potenzaCritico")] <!-- Opzionale -->
[h: sDifesa = json.get(oParams,"difesa")] <!-- Opzionale -->

[h: iCritFailTS = json.get(oOtherInfo, "critFailTS")]
[h: fPercMod = json.get(oOtherInfo,"percMod")] <!-- Opzionale -->

[h: oOrigine = findToken(oOrigine)]

[h, if(!isNumber(bCrit)): bCrit = 0]

[h: param = json.set("","LP",iLP,"dmgLP",sDanno,"spellName",spellId,"target",target,"source",oOrigine,"critico",bCrit,"potenzaCritico",fPCrit,"percMod",fPercMod,"difesa",sDifesa, "critFailTS", iCritFailTS)]
[macro("powers/getSpellDamage@this"): param]
[h: iDanno = macro.return]
[h: sRolledDice = popMessaggio(target,"spellRolledDice")]


[h: param = json.set("","target",target,"source",oOrigine, "spellName", spellId, "valore",iDanno,"verbose",0)]
[macro("core/DannoTarget@this"): param]
[h: sTooltip = strformat("Danno(%{sDanno})x%{iLP} = %{sRolledDice}")]
[h: sMsg= strformat("<img src='%s' width='25' height='25'/> <span title='%{sTooltip}'>%s</span>. %s",fetchSpellImage(spellId),fetchSpellProp(spellId,"nome_decorativo"),popMessaggio(target,"strDanno"))]


[h: macro.return = sMsg]

