[h: oToken = macro.args]

[h: oLibrary = getMacroLocation()]
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

[h: bCheck = input(strformat("indexSpell|%{lSpellFluff}|Incantesimo|LIST"),"iLocation|Libro,Memoria|Dove|RADIO")]
[h: assert(bCheck,"Abortito")]

[h: spellId = json.get(json.get(aSpells,indexSpell), "id")]
[h: spellName = json.get(json.get(aSpells,indexSpell), "nome_decorativo")]
[h, if(iLocation == 0), code:{
	[macro("powers/addPotereALibro@this"):json.append(oToken,spellId)]
	[broadcast(strformat("Aggiunto l'incantesimo %{spellName} new libro di %s", getName(oToken)), "gm")]
};{
	[addPoteriMem(oToken,spellId)]
	[broadcast(strformat("Aggiunto l'incantesimo %{spellName} in memoria di %s", getName(oToken)), "gm")]
}]


