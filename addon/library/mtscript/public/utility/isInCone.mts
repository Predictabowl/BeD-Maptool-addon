[h: source = arg(0)]
[h: target = arg(1)]
[h: iAngolo= arg(2)]
[h, if(argCount()>3): bCenter = arg(3); bCenter = 1]


[h: offsetTX = getTokenWidth(target)/2]
[h: offsetTY = getTokenHeight(target)/2]
[h: offsetSX = getTokenWidth(source)/2]
[h: offsetSY = getTokenHeight(source)/2]

[h: tx = getTokenX(1,target)+offsetTX] 
[h: ty = getTokenY(1,target)+offsetTY]
[h: sx = getTokenX(1,source)+offsetSX]
[h: sy = getTokenY(1,source)+offsetSY]

[h: alfa = getTokenFacing(source)]


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
[h: lambda = macro.return]

[h, if(bCenter), code:{
	[h: minAngolo = 180 - iAngolo/2 -1]
	[h: maxAngolo = 182 + iAngolo/2 +1]	
};{
	[h: minAngolo = 180 - iAngolo -2]
	[h: maxAngolo = 182]
}]
	
[h, if((lambda >= minAngolo) && (lambda <= maxAngolo)), code:{
	[h: return = 1]
};{
	[h: return = 0]
}]

[h: macro.return = return]