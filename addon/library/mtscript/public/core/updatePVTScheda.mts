[h: source = macro.args]

[h: switchToken(source)]
[macro("core/getPVT@this"): source]

[h, if(macro.return > 0), code:{
	[Barriera = macro.return]
};{
	[Barriera = ""]
}]