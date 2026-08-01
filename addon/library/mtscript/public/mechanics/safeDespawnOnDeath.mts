[h: sOwner = arg(0)]
[h: sSlave = arg(1)]
[h: sEffetto = arg(2)]

[h: oSlave = findToken(sSlave)]
[h, if(oSlave == ""):return (0,"")]

[h: rimuoviEffetto(sOwner, sEffetto)]