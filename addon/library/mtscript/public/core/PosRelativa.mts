[h, if(argCount()>1), code:{
	[source = arg(0)]
	[target = arg(1)]
};{
	[macro.args = arg(0)]
	[source = json.get(macro.args,0)]
	[target = json.get(macro.args,1)]
}]

[h: offsetTX = getTokenWidth(target)/2]
[h: offsetTY = getTokenHeight(target)/2]
[h: offsetSX = getTokenWidth(source)/2]
[h: offsetSY = getTokenHeight(source)/2]

[h: tx = getTokenX(1,target)+offsetTX] 
[h: ty = getTokenY(1,target)+offsetTY]
[h: sx = getTokenX(1,source)+offsetSX]
[h: sy = getTokenY(1,source)+offsetSY]

[h: alfa = getTokenFacing(target)]

[h, if(sx == tx), code:{
	[lambda = 90]
};{
	[m = (sy-ty)/(sx - tx)]
	[macro("utility/mod@this"):json.append(math.atan(m),180)]
	[lambda = macro.return]
}]


[h, if (sy<ty), code:{
	[lambda = lambda + 180]	
};{
	[if((sy==ty) && (sx<tx)), code:{
		[lambda = lambda + 180]
	}]
}]

[macro("utility/mod@this"):json.append(lambda+alfa,360)]
[h: lambda = round(macro.return)]
[h, if((lambda >= 90) && (lambda < 270)):  sReturn = "spalle"; sReturn = "fronte"]

[h: macro.return = sReturn]