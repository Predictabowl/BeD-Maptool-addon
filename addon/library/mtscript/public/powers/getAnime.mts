[h: source = macro.args]

[h: sAnime = "FAnima"]
[h: iResult = getProperty(sAnime,source)]
[h, if(isNumber(iResult) == 0):iResult = 0]
[h, if(iResult < 0): iResult = 0]

[h: macro.return = iResult]
