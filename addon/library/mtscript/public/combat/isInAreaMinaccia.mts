[h: sToken = arg(0)]
[h: sOrigin = arg(1)]

[h, if(getPropertyType(sOrigin) != "Basic"): return(0,0)]

[h: iPortata = getPortataArma(sOrigin)]
[h: iDist = getDistance(sToken, 0, sOrigin)]

[h: macro.return = iDist <= iPortata]