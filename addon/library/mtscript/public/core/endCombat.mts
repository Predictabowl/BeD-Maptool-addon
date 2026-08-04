[h: setProperty("InCombatCheck",0,"MapVar")]

[h: oTokenList= json.get(getInitiativeList(),"tokens")]
[h, foreach(oToken, oTokenList), code:{
	[sTokenId = json.get(oToken,"tokenId")]
	[macro("class_skills/delCaricheSentenza@this"): sTokenId]
	[macro("class_skills/DisattivaTutteAbilita@this"): sTokenId]
}]


[h: removeAllFromInitiative()]