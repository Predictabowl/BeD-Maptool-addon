[h: spellName = getName(arg(0))]

[h: sLibrary = getMacroLocation()]
[h: sMemoryTag = "LISTECONSUMABILI"]

[h: sTipo = upper(fetchConsumableProp(spellName,"tipo_oggetto"))]

[h: oFullGroup = getLibMemoria(sLibrary,sMemoryTag)]
[h, if(json.type(oFullGroup) != "OBJECT"): oFullGroup = "{}"]

[h: aTipo = json.get(oFullGroup,sTipo)]
[h, if(json.type(aTipo) != "ARRAY"): aTipo = "[]"]

[h, if(!json.contains(aTipo,spellName)), code:{
	[h: aTipo = json.append(aTipo,spellName)]
	[h: aTipo = json.sort(aTipo)]
}]

[h: oFullGroup = json.set(oFullGroup,sTipo,aTipo)]

[h: setLibMemoria(sLibrary,sMemoryTag,oFullGroup)]