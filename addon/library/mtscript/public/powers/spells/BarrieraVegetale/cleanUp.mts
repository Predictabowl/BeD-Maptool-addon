[h: target = json.get(macro.args,"target")]
[h: bRemove = json.get(macro.args,"remove")]
[h: oParam = json.get(macro.args,"parametri")]

[h, if(bRemove == 1), code:{
	[setCoperturaSlot(0,target,"BarrieraVegetale")]	
}]
