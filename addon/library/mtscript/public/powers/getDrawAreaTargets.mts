[h: source = arg(0)]
[h: spellName = arg(1)]

[oTokenList= json.get(getInitiativeList(),"tokens")]
[lTargets = ""]
[h, foreach(oToken, oTokenList), code:{
	[target = json.get(oToken,"tokenId")]
	[macro("powers/isEffectedByAOE@this"): json.append(source, target, source, spellName)]
	[if(macro.return): lTargets = listAppend(lTargets, target)]
}]

[h: macro.return = lTargets]
