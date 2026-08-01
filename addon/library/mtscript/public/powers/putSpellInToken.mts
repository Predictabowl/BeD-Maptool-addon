[h: oToken = macro.args]

[h: oLibrary = getMacroLocation()]
[h: oAllSpells = getLibMemoria(oLibrary,"LISTEINCANTESIMI")]

[h: lKeys = json.fields(oAllSpells)]
[h: lKeys = listSort(lKeys,"A")]

[h: bCheck = input(strformat("sScuola|%{lKeys}|Scegli Scuola|LIST|value=string"))]
[h: assert(bCheck,"Abortito")]
[h: sScuola = upper(sScuola)]

[h: lSpellFluff = ""]
[h: lSpellList = json.get(oAllSpells,sScuola)]
[h, foreach(spellName,lSpellList), code:{
	[sFluff = getLibProperty("nome_decorativo",spellName)]
	[lSpellFluff = listAppend(lSpellFluff,sFluff)]
}]

[bCheck = input(strformat("iSpellName|%{lSpellFluff}|Incantesimo|LIST"),"iLocation|Libro,Memoria|Dove|RADIO")]
[assert(bCheck,"Abortito")]
[spellName = json.get(lSpellList,iSpellName)]
[if(iLocation == 0), code:{
	[macro("powers/addPotereALibro@this"):json.append(oToken,spellName)]
};{
	[addPoteriMem(oToken,spellName)]
}]


