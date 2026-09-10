[h: tokenId = arg(0)]
[h: arma1Id = arg(1)]
[h: arma2Id = arg(2)]

[h, if(arma1Id != ""): jArma1 = getArma(tokenId, arma1Id); jArma1 = "{}"]
[h, if(arma2Id != ""), code:{
    [macro("mobs/findOggettoFromEquip@this"): json.append(tokenId, arma2Id)]
    [jArma2 = macro.return]
};{
    [jArma2 = "{}"]
}]


[h, macro("combat/inferStile@this"): json.set("", "weapon1", jArma1, "weapon2", jArma2)]
[h: stileId = macro.return]
[h: assert(stileId != -1, "Errore Critico: Armi equipaggiate incompatibili con ogni stile.", 0)]
[h, macro("combat/applyChangeStile@this"): json.append(tokenId, stileId)]