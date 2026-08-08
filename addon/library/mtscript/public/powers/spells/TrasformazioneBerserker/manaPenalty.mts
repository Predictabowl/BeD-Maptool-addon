[h: source = json.get(macro.args,"target")]
[h: remove = json.get(macro.args,"remove")]

[h, if(remove != 1): return(0,"")]

[h: addSpellMod(source,"AllSpells","PM",0,-0.5)]

[h: macro.return = ""]

<!-- SpellEffect codice rimosso -->
