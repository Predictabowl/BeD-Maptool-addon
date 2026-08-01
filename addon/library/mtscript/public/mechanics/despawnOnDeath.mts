<!-- Evento On_Death per le creature evocate -->
[h: source = json.get(macro.args,"source")]

[macro("core/getPadrone@this"): source]
[h: oOwner = macro.return]

[h, if(oOwner != ""), code:{
	[sMacro = "mechanics/safeDespawnOnDeath@lib:it.aldinucci.piero.bed.maptool.ruleset"]
	[macro("core/getEffettoServitore@this"): oOwner]
	[sParams = json.append(oOwner, source, macro.return)]
	[macro("events/addDelayedSafeMacro@this"): json.append(sMacro,sParams)]
	[macro("sadismoDiabolico@Lib:AbilitaClasse"): oOwner]
}]
[h: macro.return = ""]