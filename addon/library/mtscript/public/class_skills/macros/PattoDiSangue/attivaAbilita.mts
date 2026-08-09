[h: source = arg(0)]

[h, if(!isCombat()), code:{
	[appendMessaggio(source,"strAbilitaAttivata","Questa abilità è attivabile solamente in combattimento.")]
	[return(0,1)]
}]

[h:sNomeAb = "PattoDiSangue"]

[h: switchToken(source)]
[h: iDmg = ceil(PV_Max * 0.20)]
[h: jDannoArgs = json.set("", "target", source, "source", source, "valore", iDmg, "verbose", 0, "ignoreReductions", 1 )]
[h: dannoTarget(jDannoArgs)]
[h: recuperaMana(source, 90)]

[sMsg = strformat("%s, %s", popMessaggio(source,"strDanno"), popMessaggio(source,"msgManaRegen"))]
[h: appendMessaggio(source,"strAbilitaAttivata",sMsg)]
[h: macro.return = 0]