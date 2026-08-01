[h: oToken = arg(0)]
[h: iArmorVal = arg(1)]

[macro("getArmatura@Lib:TokenMacros"): oToken]
[h: iAdd = getAddestramentoArmatura(macro.return)]

[h: iVal = min(iArmorVal, 10 - iAdd)]

[h: macro.return = iVal]