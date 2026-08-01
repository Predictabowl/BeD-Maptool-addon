[h: target=json.get(macro.args,"target")]
[h: sCap = json.get(macro.args,"capacita")]
[h: iMod = json.get(macro.args,"modCircostanza")]

[h, if(!isNumber(iMod)): iMod = 0]

[macro("gui/blockIfNotOwner@this"):target]
[h: param = macro.args]


[h, if(json.contains(macro.args,"bSecretRoll")), code:{
	[bSecretRoll = 1]
	[param = json.remove(param,"bSecretRoll")]
};{
	[bSecretRoll = 0]	
}]

[h: pushStatModifier(target,sCap,iMod)]
[macro("mobs/rollCapacita@this"): json.append(target,sCap,bSecretRoll)]
