[h: oArma = arg(0)]

[h: sDanno = string(json.get(oArma,"danno2H"))]
[h, if(sDanno == "" || sDanno == "0"): macro.return = 1; macro.return = 0]