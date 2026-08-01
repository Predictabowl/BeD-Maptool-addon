[h: spellName = macro.args]

[h: sTipo = upper(getLibProperty("tipo",spellName))]

[h, switch(sTipo), code:
case "MALATTIA":{
	[result = "Malato"]
};
case "MALEDIZIONE":{
	[result = "Maledetto"]
};
case "MUTAFORMA":{
	[result = "Mutaforma"]
};
default: {
	[result = ""]
}]

[h: macro.return = result]