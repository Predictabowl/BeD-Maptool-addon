[h: source = json.get(macro.args,0)]
[h: sNome = json.get(macro.args,1)]

[h: switchToken(source)]
[h: sTokenNome = getSpeech(sNome)]
[h, if(sTokenNome == ""): sTokenNome = sNome]
[h: bFlag = 1]
[h: iIndex = ""]
[h, while(bFlag), code:{
	[sTentativeName = strformat("%{sTokenNome}%{iIndex}")]
	[checkToken = findToken(sTentativeName)]
	[if(checkToken == ""), code:{
		[sTokenNome =sTentativeName]
		[bFlag = 0]
	}]
	[iIndex = iIndex+1]
}]

[h: macro.return = sTokenNome]