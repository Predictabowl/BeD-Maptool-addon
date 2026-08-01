[h: fVal = arg(0)]

[h: iVal = floor(fVal)]
[h: fScarto = fVal - iVal]
[h: fDado = roll(1,1000)/1000]
[h, if(fDado <= fScarto): iVal = iVal + 1]

[h: return(0,iVal)]