[h: source = json.get(macro.args, "source")]
[h: target = json.get(macro.args, "target")]
[h: oEventParam = json.get(macro.args, "eventParam")]

[h: bAttack = isAttaccoArma(oEventParam)]
[h, if(!bAttack): return(0, "")]

[h: spellName = "ArmaIncendiaria"]
[h, if(isStile2M(source)): iChance = 58; iChance = 44]
[h: iRoll = roll(1, 100)]
[h: sNomeDec = fetchSpellProp(spellName,"nome_decorativo")]
[h, if(iRoll + iChance <= 100), code: {
	[sMsg = strformat("<span title='1d100 + probabilità = %{iRoll} + %{iChance} = %s/101'>Effetto di %{sNomeDec} fallito</span>", iRoll + iChance) ]
	[return(0,sMsg)]
}]

[h: iLL = json.get(macro.args, "LL")]

[h: jDotArg = json.set("",
	"source", source,
	"target",target,
	"spell",spellName,
	"danno","1",
	"stato","Incendio",
	"LL", iLL,
	"inizioRound", 1,
	"durata", 2,
	"bloccaTS", 0,
	"idEffetto", strformat("%{sNomeDec} - Incendio (%s)", getName(source)),
	"disableAutoConfig", 1)]
[h, macro("powers/dotSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): jDotArg]
[h: macro.return = ""]