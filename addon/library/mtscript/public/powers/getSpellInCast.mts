[h: oToken = arg(0)]

[h: oAzione = getProperty("Azione_Corrente",oToken)]

[h, if(json.isEmpty(oAzione)): return(0,"")]

[h: sMacroParam = json.get(oAzione,"MacroParam")]
[h, if(json.isEmpty(sMacroParam)): return(0,"")]

[h: spellToken = json.get(sMacroParam,"spellName")]
[h, if(json.isEmpty(spellToken)): return(0,"")]


[h: macro.return = spellToken]