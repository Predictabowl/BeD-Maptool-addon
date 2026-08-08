[h: target = json.get(macro.args,"target")]
[h: remove = json.get(macro.args,"remove")]
[h, if(remove ==""): remove = 0]

[h, if(remove == 1), code:{
};{
	[iDado = roll(1,100)]
	[h, if (iDado <= 26), code:{
		[sMsg = strformat("%s cade vittima della psicosi e perde 10 PA ", getName(target))]
		[h: SwitchToken(trarget)]
		[h: PA = PA - 10]
		[return(0, sMsg)]
	}]
}]

[h: macro.return = ""]
