[h: tokenId = json.get(macro.args, "tokenId")]
[h: bIsLight = json.get(macro.args, "isLight")]

[h, if(bIsLight == "true"): bIsLight = 1; bIsLight = 0]
[h: setPreferenza("light_mode", bIsLight, tokenId,"Grimorio_Sortilegi")]