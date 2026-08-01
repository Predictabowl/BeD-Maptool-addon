[h: source = arg(0)]
[h: iValue = arg(1)]
[h, if(argCount()>2): arma = arg(2); arma = -1]

[h: switchToken(source)]

[h, switch(arma), code:
case 1:{
	[CF1 = CF1 + iValue]
};
case 2:{
	[CF2 = CF2 + iValue]
};
default:{
	[CF1 = CF1 + iValue]
	[CF2 = CF2 + iValue]
}]

[h: macro.return = ""]