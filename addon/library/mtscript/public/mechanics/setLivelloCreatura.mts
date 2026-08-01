[h: iLiv = arg(0)]
[h, if(argcount()>1): oToken = arg(1); oToken = ""]
[h, if(argCount()>2): jRes = arg(2); jRes = "{}"]
[h, if(argCount()>3): aFlags = arg(3); aFlags = "[]"]

[h, if(oToken == ""): oToken = getImpersonated()]


[h: switchToken(oToken)]
[h: LC = iLiv]
[h: Livello = "{LC+LC2}"]

[h, if(Classe2 == "autoBuild"), code:{
	[macro("mechanics/evaluateAndApplyAutoStats@this"): oToken]
}]

[macro("mechanics/generaResistenze@this"): json.set(jRes,"spawner",oToken,"livello",iLiv)]