[h: source = json.get(macro.args,0)]
[h: target = json.get(macro.args,1)]

[h: switchToken(source)]
[h: oSight = getSightType()]
[h: bSight = hasSight()]

[h: setHasSight(1)]
[h: setSightType("Bersaglio")]

[h: lVisible = canSeeToken(target,source)]
[h, if(json.isEmpty(lVisible)): bVisible = 0; bVisible = 1]

[h: setHasSight(bSight)]
[h: setSightType(oSight)]

[h: macro.return = bVisible]
