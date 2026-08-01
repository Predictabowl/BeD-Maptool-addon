[h: target = json.get(macro.args,"target")]
[h: sEffetto = json.get(macro.args,"effetto")]
[h: switchToken(target)]
[h, if(json.type(Lista_Effetti) != "OBJECT"): Lista_Effetti = "{}"]
[h, if(json.contains(Lista_Effetti,sEffetto) == 0), code:{
	[macro("core/ApplyEffect@this"): macro.args]
	[h: bApplied = 1]
};{
	[h: bApplied = 0]
}]

[h: macro.return = bApplied]