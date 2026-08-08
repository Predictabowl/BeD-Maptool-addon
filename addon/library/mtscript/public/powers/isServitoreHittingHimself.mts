[h: source = json.get(macro.args,0)]
[h: target = json.get(macro.args,1)]
[h: spellName = json.get(macro.args,2)]

[h: oServitore = getServitore(source)]
[h, if(oServitore == ""): return(0,0)]
[h: lTipoAOE = upper(fetchSpellProp(spellName,"tipo_AOE"))]
[h: lTags = upper(fetchSpellProp(spellName,"tags"))]
[h: bReturn = 0]

[h, if(listcontains(lTags,"SERVITOREORIGIN") || listcontains(lTipoAOE,"SERVITOREORIGIN")), code:{
	[if (oServitore == target): bReturn = 1]
}]

[h: macro.return = bReturn]
