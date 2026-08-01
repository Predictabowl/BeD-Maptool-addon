[h: token = macro.args]

[h: source = token]
[macro("core/getServitore@this"): source]
[h: target = macro.return]

[h, if(target == ""), code:{
	[macro("core/getPadrone@this"): token]
	[source = macro.return]
	[h: target = token]
}]

[h, if(target != "" && source != ""), code:{
	[switchToken(source)]
	[Lista_Dati = deleteStrProp(Lista_Dati,"Servitore",target)]
	[switchToken(target)]
	[Lista_Dati = deleteStrProp(Lista_Dati,"Padrone",source)]
	[setLabel("",target)]

	[return = 1]
};{
	[return = 0]
}]


[h: macro.return = return]