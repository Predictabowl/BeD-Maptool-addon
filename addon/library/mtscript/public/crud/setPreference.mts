[h: sId = arg(0)]
[h: oValue = arg(1)]
[h, if(argCount() > 2): oToken = arg(2); oToken = getImpersonated()]
[h, if(argCount() > 3): sTipo = arg(3); sTipo = "generico"]


[h: oToken = findToken(oToken)]
[h: switchToken(oToken)]

[h, if(json.type(Preferenze) != "OBJECT"): Preferenze = "{}"]
	
[h: oTipo = json.get(Preferenze,sTipo)]
[h, if(json.type(oTipo) != "OBJECT"): oTipo = "{}"]

[h: oTipo = json.set(oTipo,sId,oValue)]
[h: Preferenze = json.set(Preferenze,sTipo,oTipo)]

