[h, if(json.type(macro.args) == "OBJECT"), code:{
	[source = json.get(macro.args,"source")]
};{
	[source = macro.args]
}]

[macro("core/getServitore@this"): source]
[h: target = macro.args]

[h, if(target != ""), code:{
	[setOwner(getPlayerName(),target)]	
	[return = 1]
};{
	[return = 0]
}]

[h: macro.return = return]