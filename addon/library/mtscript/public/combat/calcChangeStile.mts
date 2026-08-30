[h: tokenId = arg(0)]
[h: newStileId = arg(1)]


[h, if(getOverride(tokenId,"StileBloccato")), code:{
	[sMsg = "Non è possibile cambiare stile in questo momento"]
	[broadcast(sMsg,getPlayerName())]
	[return(0,0)]
}]

[h: switchToken(tokenId)]
[h: oldStileId = Stile]
[h, if(newStileId == oldStileId): return (0,"{}")]

[h: jStili = data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/db/config/stili.json")]

[h: jNewStile = json.get(jStili, newStileId)]
[h: jOldStile = json.get(jStili, oldStileId)]
[h: aNewEvents = json.get(jNewStile, "events")]
[h: aRemoveEvents = json.get(jOldStile, "events")]
[h: iMolt = json.get(jNewStile, "multiplier")]
[h: jChanges = json.set("", "events-to-add", aNewEvents, "events-to-remove", aRemoveEvents, "multiplier", iMolt)]

[h: jProperties = json.get(jNewStile, "properties")]
[h: jOldProps = json.get(jOldStile, "properties")]
[h, foreach(key, jOldProps), code:{
	[newVal = - json.get(jOldProps, key)]
	[if(json.contains(jProperties, key)): newVal = json.get(jProperties, key) + newVal]
	[jProperties = json.set(jProperties, key, newVal)]
}]

[h: jChanges = json.set(jChanges, "properties", jProperties)]


[h, macro("combat/isConflictArmaWithStile@this"): json.append(tokenId, newStileId, 1)]
[h: jChanges = json.set(jChanges, "removeW1", macro.return)]
[h, macro("combat/isConflictArmaWithStile@this"): json.append(tokenId, newStileId, 2)]
[h: jChanges = json.set(jChanges, "removeW2", macro.return)]
[h, macro("mobs/getScudo@this"): tokenId]
[h, if(!json.isEmpty(macro.return) && json.get(jNewStile, "shield") != 1): jChanges = json.set(jChanges, "removeShield", 1)]]

[r: jChanges]
[h: macro.return = jChanges]