[h: target = macro.args]
[h: tipoDif = getPreferenza("difesa_fisica_in_uso",target,"Combattimento")]

[h, if (tipoDif != "Schivare" && tipoDif != "Parare"), code:{
	[h: iSch = getProperty("Schivare",target)]
	[h: iPar = getProperty("Parare",target)]
	[r, if ((iSch*1.5) < iPar): tipoDif = "Parare"; tipoDif = "Schivare"]
}]

[h: macro.return = tipoDif]