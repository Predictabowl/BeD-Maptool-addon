[h: bSet = arg(0)]

[h, if(!isNumber(bSet)): bSet = 0]
[h, if(bSet > 1): bSet = 1]
[h, if(bSet < 0): bSet = 0]
[h: setProperty("Round_Updating",bSet,"MapVar")]
