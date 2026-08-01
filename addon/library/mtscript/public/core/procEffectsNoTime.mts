[h: oTokenList= json.get(getInitiativeList(),"tokens")]

[h: iDurata = -tempo]

[h, foreach(id, oTokenList), code:{
	[h: target = json.get(id,"tokenId")]
	[macro("powers/pagaMantenimenti@this"):target]
	[macro("core/AutoUpdateEffectTime@this"): json.append(target,iDurata)]
	[macro("utility/popMessaggio@this"): json.set("","token",target,"key","msgEffetto")]
	[if(macro.return != ""): broadcast(macro.return)]
}]