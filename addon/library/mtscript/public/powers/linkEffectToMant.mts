[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: spellName = json.get(macro.args,"spellName")]
[h: sEffetto = json.get(macro.args,"nomeEffetto")]

[h, if(target == ""): target = source]

[h: switchToken(source)]
[h, if(json.contains(Mantenimenti,spellName)), code:{
	[oMant = json.get(Mantenimenti,spellName)]
	[if(json.isEmpty(oMant)): arrayEffetti = ""; arrayEffetti = json.get(oMant,"effettiCollegati")]
	[oEffettoInfo = json.set("","nomeEffetto",sEffetto,"token",target)]
	[arrayEffetti = json.append(arrayEffetti,oEffettoInfo)]
	[oMant = json.set(oMant,"effettiCollegati",arrayEffetti)]
	[Mantenimenti = json.set(Mantenimenti,spellName,oMant)]
}]
