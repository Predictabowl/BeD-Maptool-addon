[h: source = arg(0)]
[h: target = arg(1)]

[h: switchToken(source)]
[h: sSight = getSightType()]
[h: bSight = hasSight()]
[h: setHasSight(1)]
[h: setSightType("Bersaglio")]
[h: lVisibility = canSeeToken(target,source)]
[h: setSightType(sSight)]
[h: setHasSight(bSight)]

[h: macro.return = lVisibility]