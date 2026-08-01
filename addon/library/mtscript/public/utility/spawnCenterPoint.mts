[h: source = arg(0)]

[h: sOriginale = "Centro_Da_Copiare"]
[h: sMappa = "Librerie"]
[h: iSX = getTokenX(0,source)]
[h: iSY = getTokenY(0,source)]
[h: oUpdates = json.set("","name",source,"x",iSX,"y",iSY,"size","1/4","layer","HIDDEN")]
[h: idBersaglio = copyToken(sOriginale,1,sMappa,oUpdates)]

[h: macro.return = idBersaglio]