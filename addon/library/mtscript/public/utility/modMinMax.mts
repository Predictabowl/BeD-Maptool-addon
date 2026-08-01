[h: target = json.get(macro.args,"target")]
[h: toMod = json.get(macro.args,"statToMod")]
[h: maxStat = json.get(macro.args,"maxStat")]
[h: modValue = json.get(macro.args,"modValue")]
[h: applica = json.get(macro.args,"applica")]
[h, if (applica==""): applica = 1]

[h: base = getProperty(toMod,target)]
[h: maxValue = getProperty(maxStat,target)]
[h: newValue = base+modValue]
[r, if(newValue < 0), code:{
	[h: modValue = -base]
};{
	[h,if(newValue > maxValue), code:{
		[h: modValue = maxValue - base]
	}]
}]

[h, if(applica != 0), code:{
	[h: setProperty(toMod,base+modValue,target)]
}]

[h: macro.return = modValue]