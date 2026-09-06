[h: tokenId = arg(0)]
[h: newStileId = arg(1)]

[h, macro("combat/calcChangeStile@this"): macro.args]
[h: jStileData = macro.return]

[h, if(json.isEmpty(jStileData)): return(0,"")]
[h: switchToken(tokenId)]
[h: Moltiplicatore_Att = json.get(jStileData, "multiplier")]
[h, foreach(jEvent, json.get(jStileData, "events-to-remove")), code: {
    [eventUninstaller(tokenId, json.get(jEvent, "type"), json.get(jEvent, "id"))]
}]

[h, foreach(jEvent, json.get(jStileData, "events-to-add")), code: {
    [eventInstaller(tokenId, json.get(jEvent, "type"), json.get(jEvent, "id"), json.get(jEvent, "macro"))]
}]

[h: jProperties = json.get(jStileData, "properties")]
[h, foreach(sProp, jProperties), code:{
    [newValue = getProperty(sProp) + json.get(jProperties, sProp)]
    [setProperty(sProp, newValue)]
}]

[h, if(json.get(jStileData, "removeW1") == 1), code:{
    [macro("mobs/getIdArmaEquip@this"): json.append(tokenId,1)]
	[macro("mobs/addEquipToSlotVeloce@this"): json.append(tokenId,macro.return)]
    [macro("mobs/riponiArma@this"): json.append(tokenId,1)]
}]

[h, if(json.get(jStileData, "removeW2") == 1), code:{
    [macro("mobs/getIdArmaEquip@this"): json.append(tokenId,2)]
	[macro("mobs/addEquipToSlotVeloce@this"): json.append(tokenId,macro.return)]
    [macro("mobs/riponiArma@this"): json.append(tokenId,2)]
}]

[h, if(json.get(jStileData, "removeShield") == 1), code:{
	[macro("mobs/addEquipToSlotVeloce@this"): json.append(tokenId,Scudo_Equipaggiato)]
	[macro("mobs/riponiScudo@this"): tokenId]
}]

[h: Stile = newStileId]