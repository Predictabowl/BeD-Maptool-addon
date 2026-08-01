[h: source = arg(0)]
[h: iValue = arg(1)]
[h, if(argCount()>2): iArma = arg(2); iArma= -1]

[h: switchToken(source)]

[h, switch(iArma), code:
case 1:{
	[CM = CM + iValue]
};
case 2:{
	[CM2 = CM2 + iValue]
};
default:{
	[CM = CM + iValue]
	[CM2 = CM2 + iValue]
}]

[h: macro.return = ""]