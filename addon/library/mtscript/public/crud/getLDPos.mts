[h: source = arg(0)]
[h: target = arg(1)]
[h, if(argCount()>2): bOpp = arg(2); bOpp = 0]
[h, if(argCount()>3): lType = arg(3); lType = ""]
 

[h: iReturn = getLD(target, lType)]
[h, if(isAlleSpalle(source,target,bOpp)): iReturn = iReturn + getLDSpalle(target); iReturn = iReturn + getProperty("LD_Fronte",target)]

[h: macro.return = iReturn]