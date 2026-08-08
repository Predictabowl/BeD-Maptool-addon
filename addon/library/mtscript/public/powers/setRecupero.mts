[h: source = json.get(macro.args,0)]
[h: spellName = json.get(macro.args,1)]

[h:sRecupero = "Recupero"]

[h: iDurataRec = fetchSpellProp(spellName,"recupero")]
[h, if(isNumber(iDurataRec) == 0): iDurataRec = 0]

[h, if(iDurataRec > 0), code:{
	[macro("powers/getDurataRecupero@this"): source]
	[iRecupero = macro.return]
	[if (iRecupero > 0), code:{
		[macro("powers/setDurataRecupero@this"): json.append(source, iRecupero + iDurataRec)]
	};{
		[h: param = json.set("","target",source)]
		[h: param = json.set(param,"durata",iDurataRec)]
		[h: param = json.set(param,"effetto",sRecupero)]
		[h: param = json.set(param,"tipo","Nascosto")]
		[h: param = json.set(param,"mutex","RECUPERO")]
		[h: param = json.set(param,"potenza",1)]
		[h: param = json.set(param,"verbose",0)]
		[h: param = json.set(param,"messaggi",0)]
		[h: param = json.set(param,"params","")]
		[macro("core/ApplyEffect@this"): param]
	}]
	[macro("gui/delPoteriRitardoCache@this"): source]
}]