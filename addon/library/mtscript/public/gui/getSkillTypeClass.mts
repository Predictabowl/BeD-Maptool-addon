
[h: sTipo = arg(0)]

[h, switch(sTipo), code:
case "ATTIVA":{
	[classType = "AbAttiva"]
};
case "EROICA":{
	[classType = "AbEroica"]
};
case "PECULIARE":{
	[classType = "AbPeculiare"]
};
case "PASSIVA":{
	[classType = "AbPassiva"]
};
default:{
	[classType = ""]
}]

[h: macro.return = classType]
[r: classType]