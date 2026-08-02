<!-- Incatamento di prova, da testare -->

[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: sArma = json.get(macro.args,"idArma")]
[h: fValue = json.get(macro.args,"MDI")]

[h: sMsg = ""]
[h, macro("core/isUndeadRace@this"): target]
[h, if(macro.return), code:{
	[pushStatModifier(source, "Mod_Danno_Out", fValue)]
	[sMsg = strformat("L'attacco ottiene %+d MDI perché il bersaglio è un Non Morto", floor(fValue*100))]
}]

[h: macro.return = sMsg]