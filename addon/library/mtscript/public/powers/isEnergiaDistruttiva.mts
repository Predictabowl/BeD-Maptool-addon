[h: oToken = arg(0)]

[h, macro("core/getStatModifier@this"): json.append(oToken,"EnergiaDistruttiva")]
[h: bEnergia = macro.return]

[h: bEnD2 = getOverride(oToken,"EnergiaDistruttiva")]

[h: bResult = 0]
[h, if(bEnergia > 0 || bEnD2 == 1): bResult = 1]

[h: macro.return = bResult]