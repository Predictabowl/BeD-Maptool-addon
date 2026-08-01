[h: oToken = json.get(macro.args,"source")]
[h: bToSlot = json.get(macro.args,"toSlot")]
[h: iIndex = json.get(macro.args,"item-index")]

[h, if(bToSlot), code:{
	[macro("moveToSlotVeloce@Lib:OggettiUsabili"): json.append(oToken,iIndex)]
};{
	[macro("moveFromSlotVeloce@Lib:OggettiUsabili"): json.append(oToken,iIndex)]
}]

[macro("gui/dialogEquipSlotRapidi@this"): oToken]
