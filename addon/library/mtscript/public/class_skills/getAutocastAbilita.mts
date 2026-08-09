[h: oToken = arg(0)]
[h: sAbilita = arg(1)]

[h: sTipo = fetchClassSkillProp(sAbilita,"tipo")]

[h: jMem = getDaMemoria(oToken,"AUTOCAST")]
[h, if(json.type(jMem) != "OBJECT"): return(0,0)]

[h, if(!json.contains(jMem,sTipo)): return(0,0)]

[h: sAbMem = json.get(jMem, Stipo)]
[h, if(sAbMem == sAbilita): return (0,1)]

[h: macro.return = 0]
