<!-- NOT IMPLEMENTED YET -->
[h: tokenId = arg(0)]
[h: newStileId = arg(1)]

[h, macro("combat/calChangeStile@this"): macro.args]
[h: jStileData = macro.return]

[h, if(json.isEmpty(jStileData)): return(0,"")]

<!-- Will apply the data recovered  -->
<!-- Check if the stile can use weapon 2, if not setArmaDaUsare 1 -->
