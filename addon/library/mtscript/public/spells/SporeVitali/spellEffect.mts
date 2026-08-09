[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: sCatRaz = upper(trim(getProperty("Cat_Razziale",target)))]
[h, if(sCatRaz == "NON MORTO" || sCatRaz == "COSTRUTTO"), code:{
	[appendMessaggio(target,"strCura",strformat("%s è immune agli effetti dell'incantesimo",getName(target)))]
	[return(0,"")]
}]

[h: spellName = "SporeVitali"]
[h: switchToken(target)]
[Mod_Cura_In = Mod_Cura_In +0.12]

[macro("powers/rigeneraVitaTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","source",source,"target",target,"spell",spellName,"danno","1d2",
	"macroEffectName",buildSpellMacroName("SporeVitali","specialHotEffect"))]
