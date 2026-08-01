[h: source = macro.args]

[macro("core/getServitore@this"): source]
[h: target = macro.return]

[h, foreach(id,target), code:{
	[id = findToken(id)]
	[if (id != ""), code:{
		[h: switchToken(id)]
		[Lista_Dati = deleteStrProp(Lista_Dati,"Padrone",source)]
	}]
}]

[switchToken(source)]
[Lista_Dati = deleteStrProp(Lista_Dati,"Servitore")]