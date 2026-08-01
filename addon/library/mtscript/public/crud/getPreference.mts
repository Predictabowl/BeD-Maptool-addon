[h: sId = arg(0)]
[h, if(argCount() > 1): oToken = arg(1); oToken = getImpersonated()]
[h, if(argCount() > 2): sTipo = arg(2); sTipo = "generico"]

[h: oToken = findToken(oToken)]

[h: oPref = getProperty("Preferenze",oToken)]
[h, if(json.type(oPref) != "OBJECT"): return (0,"")]

[h: oTipo = json.get(oPref,sTipo)]
[h, if(json.type(oTipo) != "OBJECT"): return (0,"")]


[h: oReturn = json.get(oTipo,sId)]
[h: return (0,oReturn)]
