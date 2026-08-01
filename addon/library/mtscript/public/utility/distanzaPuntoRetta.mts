[h: fX = arg(0)]
[h: fY = arg(1)]
[h: fA = arg(2)]
[h: fB = arg(3)]
[h: fC = arg(4)]

[h: fNum = math.abs(fA*fX + fB*fY + fC)]
[h: fDen = math.sqrt(math.pow(fA,2) + math.pow(fB,2))]

[h: macro.return = fNum/fDen]

