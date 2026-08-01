[h: source = json.get(macro.args,0)]
[h: target = json.get(macro.args,1)]

[h, if(json.length(macro.args) > 2), code:{
	[bOpp = json.get(macro.args,2)]
	[bSpalle = isAlleSpalle(source,target,bOpp)]
};{
	[bSpalle = isAlleSpalle(source,target)]
}]

[h, if(bSpalle): macro.return = getProperty("Difesa_Spalle",target);
	macro.return = getProperty("Difesa_Fronte",target)]
