[h, if(json.type(macro.args) == "ARRAY"), code:{
	[h: source = json.get(macro.args,0)]
	[h: target = json.get(macro.args,1)]
	[h: spellName = json.get(macro.args,2)]
	[h, if(json.length(macro.args)>3): sElemento = json.get(macro.args,3); sElemento = ""]
};{
	[h: source = json.get(macro.args,"source")]
	[h: target = json.get(macro.args,"target")]
	[h: spellName = json.get(macro.args,"spellName")]
	[h: sElemento = json.get(macro.args,"elemento")]
}]

[h: TStype = upper(getLibProperty("TS",spellName))]
[h: switchToken(target)]


[h: mod = 0]
[h, switch (TStype), code:
case "RIFLESSI":{
	[mod = getTSRiflessi(target)]
};
case "TEMPRA":{
	[mod = getTSTempra(target)]
};
case "VOLONTA":{
	[mod = getTSVolonta(target)]
};
default: {
	[assert(0,"Tipo di Tiro Salvezza non riconosciuto")]
}]

[h, macro("getUltimaDifesa@Lib:Combattimento"): source]
[h, if(macro.return == "parato"): mod = mod +3]

[h: mod = mod + getResistance(json.set("","source",source,"target",target,"spellName",spellName,"elemento",sElemento))]

[h: macro.return = mod]