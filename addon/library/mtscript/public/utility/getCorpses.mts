
[h: oStati = json.append("","Morte")]
[h: oLayers = json.append("","TOKEN")]
[h: oCond = json.set("","setStates",oStati,"layer",oLayers)]
[h: oTokenList = getTokens("json",oCond)]

[h: macro.return = oTokenList]