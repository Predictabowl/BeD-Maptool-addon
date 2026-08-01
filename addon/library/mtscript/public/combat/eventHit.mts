[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: difesa = json.get(macro.args,"difesa")]

[r, if(difesa != "schivato"), code:{
	[macro("events/runEvents@this"):json.set("","event","On_Hit","source",source,"target",target)]
	[macro("events/runEvents@this"):json.set("","event","On_Hitted","source",target,"target",source)]
};{}]