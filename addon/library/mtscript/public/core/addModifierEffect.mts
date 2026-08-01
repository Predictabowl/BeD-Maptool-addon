[h: oSubList = json.get(macro.args,0)]
[h: oMod = json.get(macro.args,1)]

[sTipo =json.get(oSubList,"tipo")]
[if(sTipo=="doneMod"), code:{
	[h: key = json.get(oSubList,"key")]
	[h: modVal = json.get(oSubList,"value")]
	[h: oldVal = json.get(oMod,key)]
	[h, if(isNumber(modVal)), code:{
		[h: oldVal = oldVal + modVal]
	};{
		[h: oldVal = listAppend(oldVal, modVal)]
	}]

	[h: oMod = json.set(oMod,key,oldVal)]
}]

[h: macro.return = oMod]
