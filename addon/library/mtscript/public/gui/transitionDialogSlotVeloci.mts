<!-- DEPRECATED -->
[h: oToken = json.get(macro.args,"source")]

[h, if(json.contains(macro.args,"toSlots")), code:{
	[closeDialog("EquipConsumabili")]
	[macro("gui/dialogOggettiUsabili@this"): oToken]
};{
	[closeDialog("OggettiConsumabili")]
	[macro("gui/dialogEquipSlotRapidi@this"): oToken]	
}]
