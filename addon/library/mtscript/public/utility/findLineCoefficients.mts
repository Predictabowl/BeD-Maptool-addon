[h: source = arg(0)]
[h: target = arg(1)]

[macro("getCenterTokenXY@this"): source]
[h: sx = json.get(macro.return,0)]
[h: sy = json.get(macro.return,1)]
[macro("getCenterTokenXY@this"): target]
[h: tx = json.get(macro.return,0)]
[h: ty = json.get(macro.return,1)]

[macro("rettaPerDuePunti@this"): json.append(sx,sy,tx,ty)]
