[h: spellName = getName(arg(0))]

[h: sLibrary = getMacroLocation()]
[h: sMemoryTag = "LISTEINCANTESIMI"]

[h: sScuola = upper(fetchSpellProp(spellName,"scuola"))]

[h: oFullGroup = getLibMemoria(sLibrary,sMemoryTag)]
[h, if(json.type(oFullGroup) != "OBJECT"): oFullGroup = "{}"]

[h: aScuola = json.get(oFullGroup,sScuola)]
[h, if(json.type(aScuola) != "ARRAY"): aScuola = "[]"]

[h, if(!json.contains(aScuola,spellName)), code:{
	[h: aScuola = json.append(aScuola,spellName)]
	[h: aScuola = json.sort(aScuola)]
}]

[h: oFullGroup = json.set(oFullGroup,sScuola,aScuola)]

[h: setLibMemoria(sLibrary,sMemoryTag,oFullGroup)]