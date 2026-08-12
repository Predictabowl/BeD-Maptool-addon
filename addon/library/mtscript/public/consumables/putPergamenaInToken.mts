[h: oToken = macro.args]

[h, macro("crud/fetchSpellSchools@this"):""]
[h: lSchools  = listSort(json.toList(macro.return), "A")]

[h: bCheck = input(strformat("sScuola|%{lSchools}|Scegli Scuola|LIST|value=string"))]
[h: assert(bCheck,"Abortito")]

[macro("crud/fetchSpellsBySchool@this"): sScuola]
[h: aSpells = macro.return]
[h: lSpellFluff = ""]
[h, foreach(spell,aSpells), code:{
	[sFluff = json.get(spell, "nome_decorativo")]
	[lSpellFluff = listAppend(lSpellFluff,sFluff)]
}]


[h: bCheck = input(strformat("indexSpell|%{lSpellFluff}|Pergamena|LIST"),"iLiv|1| Livello")]
[h: assert(bCheck,"Abortito")]	
[h: spellId = json.get(json.get(aSpells,indexSpell), "id")]
[h: oObj = json.set("","libName",spellId,"livello",iLiv)]
[h: switchToken(oToken)]
[h: Consumabili = json.append(Consumabili,oObj)]

