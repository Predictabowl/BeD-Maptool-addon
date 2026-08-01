[h: source = arg(0)]


[h: modLDSP =  getStatModifier(source,"LD_Spalle")]
[h: iLDSp = getProperty("LD_Spalle",source)]


[h: macro.return = iLDSp + modLDSP]