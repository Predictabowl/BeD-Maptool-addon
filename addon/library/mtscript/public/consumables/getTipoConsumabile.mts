[h: spellName = arg(0)]
[h, if(argCount() > 1): isSlot = arg(1); isSlot = 0]

[h: sType = getLibProperty("tipo_oggetto", spellName)]
[h, if(sType != ""): return(0, sType)]

[h, if(isSlot != 1): return(0, "RUNA")]
[h: macro.return = "PERGAMENA"]