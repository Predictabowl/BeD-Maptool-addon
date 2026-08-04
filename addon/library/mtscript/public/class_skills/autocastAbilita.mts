[h: oToken = arg(0)]


[h: jMem = getDaMemoria(oToken,"AUTOCAST")]
[h, if(json.type(jMem) != "OBJECT"): return(0,0)]

[h: sAbPeculiare = json.get(jMem, "PECULIARE")]
[h, if(sAbPeculiare != ""), code:{
	[macro("class_skills/AttivaAbilita@this"): json.append(oToken, sAbPeculiare)]
}]

[h: sAbAttiva = json.get(jMem, "ATTIVA")]
[h, if(sAbAttiva != ""), code:{
	[macro("class_skills/AttivaAbilita@this"): json.append(oToken, sAbAttiva)]
}]