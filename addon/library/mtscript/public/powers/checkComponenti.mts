[h: source = json.get(macro.args,0)]
[h: spellName = json.get(macro.args,1)]

[h: bCheck = 1]

[macro("powers/getSpellAnime@this"): macro.args]
[h: iAnimeCost = macro.return]
[macro("powers/getAnime@this"): source]
[h: iAnimeOwned = macro.return]

[h, if(iAnimeOwned < iAnimeCost), code:{
	[msg = strformat("<span style='color:red;font-weight:bold;'>Non hai abbastanza Frammenti d'anima.</span>")]  
	[broadcast(msg,getPlayerName())]
	[bCheck = 0]
}]

[macro("powers/getSpellComponents@this"): json.append(source,spellName)]
[h: listComponenti = macro.return]
[h, if(listContains(listComponenti,"M") && bCheck), code:{
	[macro("spells/"+spellName+"/componenteMateriale@this"): json.set("","source",source)]
	[bCheck = macro.return]
	[if(!bCheck), code:{
		[msg = strformat("<span style='color:red;font-weight:bold;'>Componente Materiale mancante.</span>")]  
		[broadcast(msg,getPlayerName())]
	}]
	
}]

[h, if(listContains(listComponenti,"F") && bCheck), code:{
	[macro("spells/"+spellName+"/componenteFocus@this"): json.set("","source",source)]
	[bCheck = macro.return]
	[if(!bCheck), code:{
		[msg = strformat("<span style='color:red;font-weight:bold;'>Componente Focus mancante.</span>")]  
		[broadcast(msg,getPlayerName())]
	}]
	
}]


[h: macro.return = bCheck]
