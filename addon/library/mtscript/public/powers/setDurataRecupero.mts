[h: source = arg(0)]
[h: iDurata = arg(1)]

[h: sRecupero = "Recupero"]
[h, if(iDurata < 1), code:{
	[macro("powers/clearRecupero@this"): source]
};{
	[macro("core/setEffectDurata@this"): json.append(source,sRecupero,iDurata)]
}]

