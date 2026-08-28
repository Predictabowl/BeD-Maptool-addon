[h: tokenId = arg(0)]
[h: resource = arg(1)]

[h: frameName = "Poteri"]
[h, macro("gui/getFrameToken@this"): frameName]
[h, if(tokenId != macro.return): return(0, "")]

[macro("gui/clearSpellStatsFromCache@this"): tokenId]
[h, switch(resource), code:
    case "VA": {
        [macro("powers/getMemSpellTimes@this"): tokenId]
        [h: jsParams = json.append("", "tempo", macro.return)]
        [h: execFunction("runFrameJsIfNeeded", json.append(tokenId, frameName, "refreshSpellsResource", jsParams), 0, "all")]
    };
    case "PP": {
        [aValues = "[]"]
        [macro("powers/getMemSpellPPs@this"): tokenId]
        [foreach(iValue, macro.return), code:{
            [spellId = json.get(iValue, "spellId")]
            [iPP = json.get(iValue, "PP")]
            [iPPMant = json.get(iValue, "PP-mant")]
            [if(iPPMant == 0): sValue = iPP; sValue = strformat("%{iPP}†%{iPPMant}")]
            [aValues = json.append(aValues, json.set("", "spellId", spellId, "PP", sValue))]
        }]
        [h: jsParams = json.append("", "PP", aValues)]
        [h: execFunction("runFrameJsIfNeeded", json.append(tokenId, frameName, "refreshSpellsResource", jsParams), 0, "all")]
    }
]


