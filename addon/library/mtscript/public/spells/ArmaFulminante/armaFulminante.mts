[h: source = json.get(macro.args, "source")]
[h: target = json.get(macro.args, "target")]
[h: oEventParam = json.get(macro.args, "eventParam")]

[h: bAttack = isAttaccoArma(oEventParam)]
[h, if(!bAttack): return(0, "")]

[h: spellName = "ArmaFulminante"]
[h, if(isStile2M(source)): iChance = 44; iChance = 33]
[h: iRoll = roll(1, 100)]
[h: sNomeDec = fetchSpellProp(spellName,"nome_decorativo")]
[h, if(iRoll + iChance <= 100), code: {
	[sMsg = strformat("<span title='1d100 + probabilità = %{iRoll} + %{iChance} = %s/101'>Effetto di %{sNomeDec} fallito</span>", iRoll + iChance) ]
	[return(0,sMsg)]
}]

[h: iLL = json.get(macro.args, "LL")]

[h: jArgs = json.set("", "source", source, "target", target, "spell", spellName, "danno", "1d5-1", "LL", iLL)]
[h, macro("powers/dmgSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): jArgs]
[h: sMsg = strformat("<img src='%s' width='25' height='25'> %s - %s", fetchSpellImage(spellName), fetchSpellProp(spellName, "nome_decorativo"), popMessaggio(source,"strSpellDamage"))]
[h: return(0, sMsg)]