[h: source = arg(0)]
[h: oEventParam = arg(1)]

[h: sTipo = upper(json.get(oEventParam,"tipo"))]

[h, if(sTipo == "ATTACCO"): return(0,1)]

[h, if(!json.contains(oEventParam,"spellName")): return(0,0)]

[h: spellName = json.get(oEventParam,"spellName")]
[h, macro("getSpellProiettile@Lib:Poteri"): json.set("","source",source,"spellName",spellName)]
[h: sMedium = macro.return]

[h, if(sMedium == "MATERIALE"): return(0,1)]

[h: macro.return = 0]