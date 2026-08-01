[h: sAttacker = arg(0)]
[h: target = arg(1)]

[h: bOpp = getOverride(sAttacker,"AttackerOnTargetFurtivo")]

[h: switchToken(sAttacker)]
[h: sSavedTarget = getStrProp(Lista_Dati,"targetOverrideFurtivo")]

[h, if(target != sSavedTarget): return(0,0)]
[h: macro.return = bOpp]