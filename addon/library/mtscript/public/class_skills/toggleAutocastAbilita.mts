[h: oToken = arg(0)]
[h: sAbilita = arg(1)]

[h: sTipo = upper(fetchClassSkillProp(sAbilita,"tipo"))]
[h, if(!listContains("ATTIVA,PECULIARE", sTipo)): return(0,"")]

[h: jMem = getDaMemoria(oToken,"AUTOCAST")]
[h, if(json.type(jMem) != "OBJECT"): jMem = "{}"]

[h: sAbMem = json.get(jMem, Stipo)]
[h, if(sAbMem == sAbilita): bSet = 0; bSet = 1]

[h, if(bSet), code:{
	[jMem = json.set(jMem, sTipo, sAbilita)]
};{
	[jMem = json.remove(jMem, sTipo)]
}]

[h: setInMemoria(oToken,"AUTOCAST", jMem)]
