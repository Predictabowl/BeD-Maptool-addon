[h: target = arg(0)]
[h, macro("utility/getDifesaAttiva@this"): target]
[h: tipoDif = macro.return]

[h, if (tipoDif != "Schivare" && tipoDif != "Parare"), code:{
	[h: iSch = getProperty("Schivare",target)]
	[h: iPar = getProperty("Parare",target)]
	[r, if ((iSch*1.5) < iPar): tipoDif = "Parare"; tipoDif = "Schivare"]
}]

[h: macro.return = tipoDif]