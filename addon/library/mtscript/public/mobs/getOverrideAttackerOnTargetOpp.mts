[h: sAttacker = arg(0)]
[h: target = arg(1)]

[h: bOpp = getOverride(sAttacker,"AttackerOnTargetOpport")]

[h: switchToken(sAttacker)]
[h: sSavedTarget = getStrProp(Lista_Dati,"targetOverrideOpport")]

[h, if(target != sSavedTarget): return(0,0)]
[h: macro.return = bOpp]