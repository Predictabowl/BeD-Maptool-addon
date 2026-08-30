[h: tokenId = arg(0)]

[h, macro("mobs/getScudo@this"): tokenId]
[h: oShield = macro.return]

[h, if(json.isEmpty(oShield)): return(0, "{}")]
[h: switchToken(tokenId)]

[h: jsShield = json.set("", "id", 2, "kind", "shield", "name", json.get(oShield, "nome"))]
[h: oAttributi = json.get(oShield, "attributi")]
[h: jsShield = json.set(jsShield, "ldBonus", json.get(oAttributi, "LD"), "parareBonus", json.get(oAttributi, "Parare"), "schivareBonus", json.get(oAttributi, "Schivare"))]

[r: jsShield]
[h: macro.return = jsShield]