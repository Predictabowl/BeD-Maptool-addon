[h: sToken = arg(0)]

[h: switchToken(sToken)]
[h, if(getPropertyType() != "Basic"): return(0,0)]
[h, if(Classe2 == "Draw-Core"): return(0, Classe)]
[h: macro.return = 0]