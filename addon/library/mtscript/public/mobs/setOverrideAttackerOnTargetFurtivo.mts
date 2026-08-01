[h: sAttacker = arg(0)]
[h: target = arg(1)]

[h: switchToken(sAttacker)]
[h: pushOverride(sAttacker,"AttackerOnTargetFurtivo")]
[h: Lista_Dati = setStrProp(Lista_Dati,"targetOverrideFurtivo",target)]