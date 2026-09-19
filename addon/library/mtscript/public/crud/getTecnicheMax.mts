[h, if(macro.args == ""): tokenId = currentToken(); tokenId = arg(0)]


[h: switchToken(tokenId)]
[h: jClasses = data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/db/config/classes.json")]

[h, if(Classe != ""), code:{
    [h: jTecniche1 = json.path.read(jClasses, strformat("%{Classe}.tecniche-marziali"), "SUPPRESS_EXCEPTIONS")]
    [h, if(jTecniche1 == "null" || json.isEmpty(jTecniche1)), code:{
        [iTecniche1 = 0]
    };{
        [fProg = eval(json.get(jTecniche1, "progressione"))]
        [iTecniche1 = floor((LC * fProg) + json.get(jTecniche1, "base"))]
    }]
}; {
    [iTecniche1 = 0]
}]

[h, if(Classe2 != ""), code:{
    [h: jTecniche2 = json.path.read(jClasses, strformat("%{Classe2}.tecniche-marziali"), "SUPPRESS_EXCEPTIONS")]
    [h, if(jTecniche2 == "null" || json.isEmpty(jTecniche2)), code:{
        [iTecniche2 = 0]
    };{
        [fProg = eval(json.get(jTecniche2, "progressione"))]
        [iTecniche2 = floor((LC2 * fProg) + json.get(jTecniche2, "base"))]
    }]
}; {
    [iTecniche2 = 0]
}]

[h: return(0, iTecniche1 + iTecniche2)]