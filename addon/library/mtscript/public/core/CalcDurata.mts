[h: iDurata = json.get(macro.args,"durata")]
[h: mod = json.get(macro.args,"mod")]

[h, if (iDurata > 0), code:{
	[h: iDurata = iDurata + mod]
	[h, if(iDurata < 0): iDurata = 0]
}]
[h: macro.return = iDurata]
