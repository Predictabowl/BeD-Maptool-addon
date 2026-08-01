[h: x = arg(0)]
[h, if(x>0), code:{
	[n = floor(x)]
};{
	[n = ceil(x)]
}]
[h: macro.return = n]