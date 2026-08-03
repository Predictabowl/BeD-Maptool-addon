[h: source = arg(0)]
[h, if(argCount()>1): bItem = arg(1); bItem = 1]

[h: sTag = "forceItemCasting"]
[h, if(bItem == 1): pushOverride(source,sTag); popOverride(source,sTag)]