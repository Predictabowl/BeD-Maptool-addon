[h: oToken = macro.args]

[h: oLibrary = "Lib:Poteri"]
[h: oAllSpells = getLibMemoria(oLibrary,"LISTEINCANTESIMI")]

[h: lKeys = json.fields(oAllSpells)]
[h: lKeys = listSort(lKeys,"A")]

[h: bCheck = input(strformat("sScuola|%{lKeys}|Scegli il tipo|LIST|value=string"))]
[h: assert(bCheck,"Abortito")]
[h: sScuola = upper(sScuola)]

[h: lSpellFluff = ""]
[h: lSpellList = json.get(oAllSpells,sScuola)]
[h, foreach(spellName,lSpellList), code:{
	[sFluff = fetchSpellProp(spellName,"nome_decorativo")]
	[lSpellFluff = listAppend(lSpellFluff,sFluff)]
}]


[bCheck = input(strformat("iSpellName|%{lSpellFluff}|Pozione|LIST"),"iLiv|1| Livello")]
[assert(bCheck,"Abortito")]	
[spellName = json.get(lSpellList,iSpellName)]
[oObj = json.set("","libName",spellName,"livello",iLiv)]
[switchToken(oToken)]
[Consumabili = json.append(Consumabili,oObj)]

