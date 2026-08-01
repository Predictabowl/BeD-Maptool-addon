[h: setProperty("InCombatCheck",0,"MapVar")]

[h: oTokenList= json.get(getInitiativeList(),"tokens")]
[h, foreach(oToken, oTokenList), code:{
	[sTokenId = json.get(oToken,"tokenId")]
	[macro("delCaricheSentenza@Lib:AbilitaClasse"): sTokenId]
	[macro("DisattivaTutteAbilita@Lib:AbilitaClasse"): sTokenId]
}]


[h: removeAllFromInitiative()]