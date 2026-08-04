[h: sLibAbilita = arg(0)]

[h, if(isAbilitaPassiva(sLibAbilita)): return(0,"PASSIVA")]
[h: macro.return = upper(getLibProperty("tipo",sLibAbilita))]