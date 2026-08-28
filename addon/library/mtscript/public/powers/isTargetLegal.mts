[h: target = arg(0)]

[h: bFlag = 1]
[h, if(target == ""): return(0,0)]

[h, if(getPropertyType(target) != "Basic"): bFlag = 0]

[h: macro.return = bFlag]