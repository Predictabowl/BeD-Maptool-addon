[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: maxDist = json.get(macro.args,"portata")]

[macro("powers/getDrawCoreId@this"): target]
[h: sDrawId = macro.return]
[h, if(sDrawId != 0), code:{
	[macro("utility/distanzaTokenDraw@this"): json.append(source, sDrawId)]
	[check = macro.return]
};{
	[h: check = getDistance(source,1,target)]
}]
[h: macro.return = if (check <= maxDist,1,0)]