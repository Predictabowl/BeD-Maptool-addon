[h: sArma = arg(0)]

[h: oArmi = data.getStaticData(getMacroLocation(), "public/db/items/weapons.json")]
[h: oArma = json.get(oArmi,sArma)]
[h, if(json.type(oArma) != "OBJECT"): oArma = "{}"; oArma = json.set(oArma,"idDB",sArma)]

[h: macro.return = oArma]