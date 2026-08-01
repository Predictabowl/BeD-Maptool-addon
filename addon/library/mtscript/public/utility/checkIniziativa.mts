[h: ini = macro.args]
[h: fr = getProperty("Frazione","MapVar")]
[h, if(ini<fr), code:{
	[macro.return=fr]
};{
	[macro.return=ini]
}]