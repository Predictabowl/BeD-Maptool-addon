[h: source = arg(0)]
[h: target = arg(1)]
[h, if(argCount()>2): bOpp = arg(2); bOpp = 0]
[h, if(argCount()>3): iArma= arg(3); iArma = ""]
 

[h: iReturn = getLA(source,iArma)]
[h, if(isAlleSpalle(source,target,bOpp)): iReturn = iReturn + getLASpalle(source,iArma); iReturn = iReturn + getProperty("LA_Fronte",source)]

[h: macro.return = iReturn]