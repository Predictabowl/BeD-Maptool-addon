[h: source = arg(0)]
[h: sItemName = arg(1)]

[macro("powers/getRawSpellTime@this"): json.append(source, sItemName, 0)]
[h: iTime = macro.return]

[h: iTime = calcActionTime(iTime,source, 0)]


[h: macro.return = iTime]