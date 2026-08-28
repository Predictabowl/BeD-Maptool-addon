[h: iTime = arg(0)]
[h, if(argCount()>1): oToken = arg(1); oToken=currentToken()]
[h, if(argCount()>2): iMod = arg(2); iMod = 0]


[h: fMod = (getVA(oToken)+iMod)/100]
[h: fRes = 1 - calcConRitornoMarginale(fMod, 0.45, 0.95)]
[h: iReturnTime = max(round(iTime*fRes),1)]
[h: macro.return = iReturnTime]