[h: target = arg(0)]
[h: size = getSize(target)]
[h, switch(size), code:
case "1/4":{
	[offset = -4]
};
case "1/3":{
	[offset = -3]
};
case "1/2":{
	[offset = -2]
};
case "2/3":{
	[offset = -1]
};
case "Large":{
	[offset = 1]
};
case "Huge":{
	[offset = 2]
};
case "Humongous":{
	[offset = 3]
};
case "Gargantuan":{
	[offset = 3]
};
case "Colossal":{
	[offset = 4]
};
default:{
	[offset = 0]
}]
[h: macro.return = offset]
