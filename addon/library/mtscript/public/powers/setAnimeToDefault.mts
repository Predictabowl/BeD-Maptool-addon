[h: source = macro.args]

[h: sAnime = "FAnima"]
[h: iAnime = getProperty(sAnime,source)]
[bReturn = 0]
[h, if(isNumber(iAnime)), code:{
	[bReturn = getProperty("FAnima_Max", source)]
	[if(iAnime > bReturn): setProperty(sAnime, bReturn,source)]
}]

[h: macro.return = bReturn]