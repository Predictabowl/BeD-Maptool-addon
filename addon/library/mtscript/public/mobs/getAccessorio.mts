[h: oToken = arg(0)]
[h: itemId = arg(1)]

[h: switchToken(oToken)]
[h: oLocalA = json.get(Equipaggiamento,itemId)]
[h: idDB = json.get(oLocalA,"idDB")]
[h: sCat = json.get(oLocalA,"categoria")]
[macro("items/getAccessorioFromDB@this"): json.append(idDB,sCat)]
[h: oOggetto = macro.return]

[h: oOggetto = json.merge(oLocalA,oOggetto)]
[h: oOggetto = json.set(oOggetto,"localId",itemId)]

[h: macro.return = oOggetto]

