[h: oToken = macro.args]

[h: oLibrary = getMacroLocation()]
[h: oAllSpells = getLibMemoria(oLibrary,"LISTECONSUMABILI")]

[h: lKeys = json.fields(oAllSpells)]
[h: lKeys = listSort(lKeys,"A")]

[h: bCheck = input(strformat("sScuola|%{lKeys}|Scegli il tipo|LIST|value=string"))]
[h: assert(bCheck,"Abortito")]
[h: sScuola = upper(sScuola)]

[h: lSpellFluff = ""]
[h: lSpellList = json.get(oAllSpells,sScuola)]
[h, foreach(spellName,lSpellList), code:{
	[sFluff = getLibProperty("nome_decorativo",spellName)]
	[lSpellFluff = listAppend(lSpellFluff,sFluff)]
}]

[h: bFlag = 1]

[h, if(sScuola == "RUNA"), code:{
	[bCheck = input(strformat("iSpellName|%{lSpellFluff}|Runa|LIST"))]
	[assert(bCheck,"Abortito")]	
	[spellName = json.get(lSpellList,iSpellName)]
	[macro("consumables/makeRunaToPG@this"):json.append(oToken,spellName)]
	[bFlag = 0]
	[return(0,0)]
}]

[h, if(sScuola == "POZIONE"), code:{
	[bCheck = input(strformat("iSpellName|%{lSpellFluff}|Pozione|LIST"),"iLiv|1| Livello")]
	[assert(bCheck,"Abortito")]	
	[spellName = json.get(lSpellList,iSpellName)]
	[oObj = json.set("","libName",spellName,"livello",iLiv)]
	[switchToken(oToken)]
	[Consumabili = json.append(Consumabili,oObj)]
	[bFlag = 0]
}]

