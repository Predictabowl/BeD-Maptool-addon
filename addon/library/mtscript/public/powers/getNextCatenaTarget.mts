[h: source = arg(0)]
[h: sOrigine = arg(1)]
[h: tempList = arg(2)]
[h: lTargets = arg(3)]
[h: spellName = arg(4)]

[h: tempList2 = ""]
[h, foreach(id,tempList), code:{
	[macro("powers/isEffectedByAOE@this"): json.append(source,id,sOrigine,spellName)]
	[bAffected = macro.return]
	[if(bAffected && !listContains(lTargets, id)): tempList2 = listAppend(tempList2, id)]
}]

[h, if(listCount(tempList2) < 1): return(0, "")]
[h: target = listGet(tempList2, 0)]
[h: iMinDistance = getDistance(target, 0, sOrigine, "ONE_ONE_ONE")]
[h, foreach(id,tempList2), code:{
	[iDistance = getDistance(id, 0, sOrigine, "ONE_ONE_ONE")]
	[if(iDistance < iMinDistance), code: {
		[target = id]
		[iMinDistance = iDistance]
	}]
}]

[h: macro.return = target]