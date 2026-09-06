[h: jWeapon1 = json.get(macro.args, "weapon1")]
[h: jWeapon2 = json.get(macro.args, "weapon2")]

[h: jStili = data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/db/config/stili.json")]

[h: lAllowed = "arma,scudo"]

[h: maskW1 = 0]
[h: maskW2 = 0]
[h, if(json.isEmpty(jWeapon1)), code:{
    [maskW1 = 1]
    [w1Type = ""]
};{
    [sCat = json.get(jWeapon1, "categoria")]
    [if(!listContains(lAllowed, sCat)): return(0,-1)]
    [if(json.get(jWeapon1, "danno1H") != 0): maskW1 = maskW1 +1]
    [if(json.get(jWeapon1, "danno2H") != 0): maskW1 = maskW1 +2]
    [w1Type = json.get(jWeapon1, "tipoArma")]
}]

[h, if(json.isEmpty(jWeapon2)), code:{
    [maskW2 = -1]
    [w2Type = ""]
};{
    [sCat = json.get(jWeapon2, "categoria")]
    [if(!listContains(lAllowed, sCat)): return(0,-1)]
    [if(sCat == "scudo"), code:{
        [maskW2 = 1]
        [w2Type = "scudo"]
    };{
        [if(json.get(jWeapon2, "danno1H") != 0): maskW2 = maskW2 +1]
        [if(json.get(jWeapon2, "danno2H") != 0): maskW2 = maskW2 +2]
        [w2Type = json.get(jWeapon2, "tipoArma")]
    }]
}]

[h, if(maskW2 == 2): return(0, -1)]
[h, if(w1Type == "Lancio"): return(0, -1)]
[h, if(w2Type == "Tiro"): return(0, -1)]

[h, if(maskW1 == 2), code:{
    [if(maskW2 > 0): return(0, -1)]
    [if(w1Type == "Tiro"): return(0, "AD")]
    [return(0, "2M")]
}]

[h, if(maskW2 < 1), code: {
    [if(maskW1 > 1): return(0, "2M"); return(0, "1A")]
};{
    [if(w2Type == "scudo"): return(0, "AS")]
    [if(w2Type == "Lancio"): return(0, "1A")]
    [h: return(0, "2A")]
}]

