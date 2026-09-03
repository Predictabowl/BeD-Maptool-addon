<!-- DEPRECATED, but still in use somewhere -->
[h: tokenId = arg(0)]
[h: sStile = upper(arg(1))]
[h: switchToken(tokenId)]

[h, switch(sStile), code:
case "ARMA E MANO LIBERA":{
	[stileId = "1A"]
};
case "DUE ARMI":{
	[stileId ="2A"]
};
case "ARMA A DUE MANI":{
	[stileId = "2M"]
};
case "ARMA A DISTANZA":{
	[stileId = "AD"]	
};
case "ARMA E SCUDO":{
	[stileId = "AS"]
};
default:{
	[stileId = sStile]
}]

[h: setProperty("Stile",stileId,tokenId)]