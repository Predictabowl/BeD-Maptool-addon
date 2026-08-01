[h: sProp = arg(0)]
[h, if(argCount() > 1): sType = arg(1); sType = "Basic"]

[h: lProps = getAllPropertyNames(sType)]

[h: macro.return = listContains(lProps, sProp)]