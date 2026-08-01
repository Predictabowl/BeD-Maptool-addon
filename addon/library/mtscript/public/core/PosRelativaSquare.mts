[h: source = json.get(macro.args,0)]
[h: target = json.get(macro.args,1)]
[macro("getSizePosMod@"+getMacroLocation()): target]
[h: offset = macro.return]
[h: tx = getTokenX(0,target)+offset]
[h: ty = getTokenY(0,target)+offset]
[h: sx = getTokenX(0,source)]
[h: sy = getTokenY(0,source)]
[h: X = tx-sx]
[h: Y = ty-sy]

[h: alfa = floor(getTokenFacing(target)/90)]
[h: param = json.append(abs(alfa),2)]
[macro("mod@Lib:Mat"):param]
[h: lambda = macro.return]

[h: C1 = (X+Y)*(X-Y) * (-1)^lambda]
[h: C2 = (1-alfa)*(1-lambda)*X - alfa*lambda*Y]

[if(C1<0), code:{
	[h: macro.return = "fianchi"]
};{
	[if(C2>0), code:{
		[h: macro.return = "spalle"]
	};{
		[h: macro.return = "fronte"]
	}]
}]