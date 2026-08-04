[h: libName = arg(0)]
[h: oToken = arg(1)]

[h: sText = getLibProperty("descrizione",libName)]
[h: id = strfind(sText, "(%s)")]
[h, if(getFindCount(id) < 1): return(0, sText)]

[h, macro("formatDescription@"+libName): json.append(oToken, sText)]