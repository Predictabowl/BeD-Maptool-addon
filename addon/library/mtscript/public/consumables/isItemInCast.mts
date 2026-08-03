[h: source = arg(0)]
[h: libName = arg(1)]

[h, if(libName == ""): return(0,0)]
[h, if(getPropertyType(libName,"Librerie") == "ConsumabileToken"): return(0,1)]

[h: bItem = getSpellStartData(source,"isItemInCast")]
[h, if(bItem == 1): return(0,1)]

[h, if (getOverride(source,"forceItemCasting")): return(0,1)]

[h: macro.return = 0]