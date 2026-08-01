[h: oToken = arg(0)]

[h: switchToken(oToken)]
[h, if(getState("Terrore")): return(0, 1)]
[h, if(getState("Tramortito")): return(0, 1)]
[h, if(getState("Paralisi")): return(0, 1)]
[h, if(getState("Pietrificato")): return(0, 1)]

[h: macro.return = 0]