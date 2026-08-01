[h: broadcast("DEPRECATED: "+getMacroName()+"@"+getMacroLocation())]
[h: target = macro.args]
[h: size = getSize(target)]
[h: offset = 0]
[h, switch(size), code:
case "1/2":{
	[offset = -0.25]
};
case "Large":{
	[offset = 0.5]
};
case "Huge":{
	[offset = 1]
};
case "Gargantuan":{
	[offset = 1.5]
};
case "Colossal":{
	[offset = 2.5]
};
case "Humongous":{
	[offset = 2]
};
default:{
}]
[h: macro.return = offset]
