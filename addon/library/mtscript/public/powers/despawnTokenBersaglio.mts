[h: source = arg(0)]

[h: sNomeToken = strformat("Bersaglio-%s",getName(source))]
[h: oBersaglio = findToken(sNomeToken)]

[h, if(oBersaglio != ""), code:{	
	[removeToken(oBersaglio)]
	[return(0,1)]
}]

[h: macro.return = 0]