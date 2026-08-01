[h: message = macro.args]
[h: verbose = getProperty("Verbose","MapVar")]
[h, if (verbose == 1), code:{
	[macro.return = message]
};{
	[macro.return=""]
}]