[h: sArma = arg(0)]

[h: oArmi = data.getStaticData(getMacroLocation(), "public/db/items/armors.json")]
[h: oArma = json.get(oArmi,sArma)]
[h: oArma = json.set(oArma,"categoria","armatura","idDB",sArma)]

[h: macro.return = oArma]