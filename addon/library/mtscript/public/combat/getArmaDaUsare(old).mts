[h, if(json.type(macro.args) == "OBJECT"), code:{
	[h: source = json.get(macro.args,"source")]
};{
	[h: source = arg(0)]
}]


[h: sStile = getProperty("Stile",source)]
[h: result = 1]
[h, if(sStile=="2A"), code:{
	[macro("combat/getNumAttacchi@this"): source]
	[h: numAtt = json.get(macro.return,0) + json.get(macro.return,1) + json.get(macro.return,2) + json.get(macro.return,3)]
	[h: iAttR = getNumAttacchiRimasti(source) + getNumAttacchiRimasti(source,1) + getNumPoteriOffensivi(source)]
	[h: val = math.isOdd(numAtt - iAttR)]
	[h,if(val == 1): result = 1; result = 2]
};{
	[h: result = 1]
}]
[h: macro.return = result]