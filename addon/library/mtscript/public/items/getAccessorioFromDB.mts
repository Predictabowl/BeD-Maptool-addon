[h: sOggetto = arg(0)]
[h: sCategoria = lower(arg(1))]

[h: oOggetti = data.getStaticData(getMacroLocation(), "public/db/items/" + sCategoria + ".json")]
[h: oOggetto = json.get(oOggetti,sOggetto)]
[h: oOggetto = json.set(oOggetto,"categoria",sCategoria,"idDB",sOggetto)]
[h: macro.return = oOggetto]