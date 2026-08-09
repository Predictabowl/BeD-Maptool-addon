[h: oToken = json.get(macro.args,"target")]
[h: bRemove = json.get(macro.args,"remove")]
[h: oParam = json.get(macro.args,"parametri")]

[h, if(bRemove == 1), code:{
	[sVista = json.get(oParam,"vistaOriginale")]
	[setSightType(sVista,oToken)]
	[macro("mobs/delVistaPersonaggio@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(oToken,"Scurovisione")]
}]
