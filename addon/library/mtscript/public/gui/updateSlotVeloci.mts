[h: oToken = json.get(macro.args,"source")]
[h: bToSlot = json.get(macro.args,"toSlot")]
[h: iIndex = json.get(macro.args,"item-index")]

[h, if(bToSlot), code:{
	[macro("consumables/moveToSlotVeloce@this"): json.append(oToken,iIndex)]
};{
	[macro("consumables/moveFromSlotVeloce@this"): json.append(oToken,iIndex)]
}]

[macro("gui/dialogEquipSlotRapidi@this"): oToken]
