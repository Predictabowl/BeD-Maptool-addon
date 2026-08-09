[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: eventParam = json.get(macro.args,"eventParam")]

[h: spellName = json.get(eventParam,"spellName")]
[h, if(spellName == ""): return(0,"")]

[h: sTipo = lower(fetchSpellProp(spellName,"tipo"))]
[h, if(sTipo != "offensivo"): return (0,"")]

[h: pushStatModifier(source,"Mod_Danno_Out",0.1)]
[h: pushStatModifier(source,"CD",1)]

[h: macro.return = ""]