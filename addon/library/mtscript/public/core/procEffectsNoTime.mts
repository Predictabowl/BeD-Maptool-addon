[h: oTokenList= json.get(getInitiativeList(),"tokens")]

[h: iDurata = -tempo]

[h, foreach(id, oTokenList), code:{
	[h: target = json.get(id,"tokenId")]
	[macro("pagaMantenimenti@Lib:Poteri"):target]
	[macro("core/AutoUpdateEffectTime@this"): json.append(target,iDurata)]
	[macro("popMessaggio@Lib:MetodiVari"): json.set("","token",target,"key","msgEffetto")]
	[if(macro.return != ""): broadcast(macro.return)]
}]