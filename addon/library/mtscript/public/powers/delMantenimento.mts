[h: source = json.get(macro.args,0)]
[h: spellName = json.get(macro.args,1)]
[h, if(json.length(macro.args) > 2): bRecursive = json.get(macro.args,2); bRecursive = 1] 

[h: switchToken(source)]

[h, if(bRecursive == 0), code:{
	[Mantenimenti = json.remove(Mantenimenti,spellName)]	
	[return (0,0)]
}]

[h, if(json.type(Mantenimenti) != "OBJECT"): Mantenimenti = "{}"]
[h, if(json.contains(Mantenimenti,spellName)), code:{
	[h: oMant = json.get(Mantenimenti,spellName)]
	[arrayEffetti = json.get(oMant,"effettiCollegati")]
	[if(json.type(arrayEffetti) != "ARRAY"): arrayEffetti = ""]
};{
	[arrayEffetti = ""]
}]

[foreach(arrayItem,arrayEffetti), code:{
	[h: sEffetto = json.get(arrayItem,"nomeEffetto")]
	[h: target = json.get(arrayItem,"token")]
	[macro("core/RemoveEffect@this"): json.append(target,sEffetto)]
}]

[h: Mantenimenti = json.remove(Mantenimenti,spellName)]