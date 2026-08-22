[h: oToken = macro.args]

[h, macro("crud/fetchConsumableTypes@this"): ""]
[h: lTypes = json.toList(macro.return)]

[h: bCheck = input(strformat("sScuola|%{lTypes}|Scegli il tipo|LIST|value=string"))]
[h: assert(bCheck,"Abortito")]

[h, macro("crud/fetchConsumablesByType@this"): sScuola]
[h: aConsumables  = macro.return]
[h: lSpellFluff = ""]
[h, foreach(spell, aConsumables), code:{
	[sFluff = json.get(spell, "nome_decorativo")]
	[lSpellFluff = listAppend(lSpellFluff,sFluff)]
}]

[h: bCheck = input(strformat("indexSpell|%{lSpellFluff}|Pergamena|LIST"),"iLiv|1| Livello")]
[h: assert(bCheck,"Abortito")]	
[h: spellId = json.get(json.get(aConsumables,indexSpell), "id")]
[h: oObj = json.set("","libName",spellId,"livello",iLiv, "equipped", 0)]
[h: switchToken(oToken)]
[h: Consumabili = json.append(Consumabili,oObj)]

