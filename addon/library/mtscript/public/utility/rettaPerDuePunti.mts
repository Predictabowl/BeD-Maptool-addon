[h: x1 = arg(0)]
[h: y1 = arg(1)]
[h: x2 = arg(2)]
[h: y2 = arg(3)]

[h: assert(x1 != x2 || y1 != y2, "Impossibile trovare retta passaten per due punti identici")]

[h: a = y2-y1]
[h: b = x1-x2]
[h: c = -(a*x1)-(b*y1)]

[h: macro.return = json.append(a,b,c)]