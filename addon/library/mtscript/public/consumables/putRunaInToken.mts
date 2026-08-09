[h: oToken = arg(0)]

[h: oLibrary = "Lib:Poteri"]
[h: oAllSpells = getLibMemoria(oLibrary,"LISTEINCANTESIMI")]

[h: lKeys = json.fields(oAllSpells)]
[h: lKeys = listSort(lKeys,"A")]

[h: bCheck = input(strformat("sScuola|%{lKeys}|Scegli Scuola|LIST|value=string"))]
[h: assert(bCheck,"Abortito")]
[h: sScuola = upper(sScuola)]

[h: lSpellFluff = ""]
[h: lSpellList = json.get(oAllSpells,sScuola)]
[h, foreach(spellName,lSpellList), code:{
	[sFluff = fetchSpellProp(spellName,"nome_decorativo")]
	[lSpellFluff = listAppend(lSpellFluff,sFluff)]
}]

[h: bCheck = input(strformat("iSpellName|%{lSpellFluff}|Incantesimo|LIST"))]
[h: assert(bCheck,"Abortito")]
[h: spellName = json.get(lSpellList,iSpellName)]

[h, macro("consumables/makeRunaToPG@this"):json.append(oToken,spellName)]

