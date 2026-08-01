[h: source = arg(0)]

[h, macro("class-skills/getAbilitaClasseTutte@this"): source]
[h: lAb = macro.return]

[h, foreach(sAbil, macro.return), code:{
	[if(!isAbilitaEroica(sAbil)): lAb = json.remove(lAb,sAbil)]
}]

[h: macro.return = lAb]