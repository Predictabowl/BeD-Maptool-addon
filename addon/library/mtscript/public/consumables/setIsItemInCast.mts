[h: source = arg(0)]
[h, if(argCount()>1): bItem = arg(1); bItem = 1]

[h: addSpellStartData(source,"isItemInCast",bItem)]