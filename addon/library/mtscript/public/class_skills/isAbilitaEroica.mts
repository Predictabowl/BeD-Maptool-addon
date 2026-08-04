[h: sNomeAb = arg(0)]

[h, macro("class_skills/getTipoAbilita@this"): sNomeAb]
[h, if(macro.return == "EROICA"): return(0,1)]
[h: macro.return = 0]