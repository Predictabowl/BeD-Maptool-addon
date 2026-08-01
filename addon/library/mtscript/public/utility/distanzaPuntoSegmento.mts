[h: x1 = arg(0)]
[h: y1 = arg(1)]
[h: xA = arg(2)]
[h: yA = arg(3)]
[h: xB = arg(4)]
[h: yB = arg(5)]


[h, macro("utility/rettaPerDuePunti@this"): json.append(x1, y1, xA, yA)]
[h: aR1 = macro.return]
[h, macro("utility/rettaPerDuePunti@this"): json.append(x1, y1, xB, yB)]
[h: aR2 = macro.return]


[h: bA = bxor((json.get(aR1,0) < 0), (json.get(aR2,0) < 0))]
[h: bB = bxor((json.get(aR1,1) < 0), (json.get(aR2,1) < 0))]

[h: aP1 = json.append(x1,y1)]
[h, if(bA || bB), code:{
	[h, macro("utility/rettaPerDuePunti@this"): json.append(xA, yA, xB, yB)]
	[macro("distanzaPuntoRetta@this"): json.merge(aP1, macro.return)]
	[return(0, macro.return)]
}]

[h: fDA = math.sqrt(math.pow(x1-xA,2) + math.pow(y1-yA,2))]
[h: fDB = math.sqrt(math.pow(x1-xB,2) + math.pow(y1-yB,2))]
[h: macro.return = min(fDA, fDB)]