[h: oArma = arg(0)]

[h, macro("gui/isArmaDistanza@this"): oArma]
[h, if(macro.return): return(0,0)]
[h: sDanno = string(json.get(oArma,"danno1H"))]
[h, if(sDanno == "" || sDanno == "0"): macro.return = 1; macro.return = 0]