[h: sTipo = arg(0)]
[h, if(argCount() > 1): oToken = arg(1); oToken = getImpersonated()]


[h: oToken = findToken(oToken)]
[h: switchToken(oToken)]

[h: Preferenze = json.remove(Preferenze,sTipo)]

