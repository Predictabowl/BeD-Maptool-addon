[h: source = arg(0)]
[h: iValue = arg(1)]
[h, if(argCount()>2): arma = arg(2); arma = -1]

[h: switchToken(source)]

[h, switch(arma), code:
case 1:{
	[LA1 = LA1 + iValue]
};
case 2:{
	[LA2 = LA2 + iValue]
};
default:{
	[LA1 = LA1 + iValue]
	[LA2 = LA2 + iValue]
}]

[h: macro.return = ""]