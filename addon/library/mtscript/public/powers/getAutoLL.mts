[h, if(json.type(macro.args) == "OBJECT"), code:{
	[h: source = json.get(macro.args,"source")]
	[h: spell = json.get(macro.args,"spellName")]
	[h: armaDU = json.get(macro.args,"arma")] <!-- opzionale -->
};{
	[source = json.get(macro.args,0)]
	[spell = json.get(macro.args,1)]
	[armaDU = ""]
}]

[h, if(isItemInCast(source,spell)), code:{
	[macro("consumables/getAutoLLOggetto@this"): json.append(source,spell)]
	[return(0,macro.return)]
}]

[h, if(armaDU == ""): armaDU = getArmaDaUsare(source)]
[h: param = json.set("","source",source,"spell",spell,"arma",armaDU)]
[h: livL = getLL(param)]

[h: macro.return = livL]