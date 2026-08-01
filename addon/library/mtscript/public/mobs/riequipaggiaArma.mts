[h: oToken = json.get(macro.args,0)]
[h: iArma = json.get(macro.args,1)-1]

[h: switchToken(oToken)]
[h: sArmaOld =  listGet(Armi_Equipaggiate,iArma)]

[h, if(sArmaOld != ""), code:{
	[macro("mobs/equipaggiaArma@this"): json.append(macro.args,sArmaOld)]
}]