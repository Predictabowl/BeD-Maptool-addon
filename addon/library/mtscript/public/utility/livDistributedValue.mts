[h: iMin = arg(0)]
[h: iMax = arg(1)]
[h, if(argCount()>2): iLivMax = arg(2); iLivMax = 30]
[h, if(argCount()>3): iRandMax = arg(3); iRandMax = 0]
[h, if(argCount()>4): oToken = arg(4); oToken = ""]

[h, if(oToken != ""): switchToken(oToken)]

[h: iLiv = min(Livello,iLivMax)-1]

[h: iGap = iMax - iMin]
[h: fValue = iLiv*iGap/(iLivMax-1)]
[h, if(iRandMax >0): fRoll = roll(1,iRandMax)-((iRandMax+1)/2); fRoll = 0]
[h: iValue = iMin+floor(fValue+fRoll)]

[h: macro.return = iValue]