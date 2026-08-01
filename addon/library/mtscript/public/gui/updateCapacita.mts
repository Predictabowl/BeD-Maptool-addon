[h: target = json.get(macro.args,"target")]
[h: listCap = json.get(macro.args,"listCap")]
[h: param = macro.args]

[h, if(json.contains(param,"Modifica")), code:{
	[switchToken(target)]
	[h, foreach (cap,listCap,","), code:{
		[valore = json.get(param,cap)]
		[setProperty(cap,valore)]
	}]
}]

[macro("gui/ModificaCapacita@this"):target]