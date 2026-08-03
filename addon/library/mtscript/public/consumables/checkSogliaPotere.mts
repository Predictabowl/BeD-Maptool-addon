[h: oToken = arg(0)]
[h: oOggetto = arg(1)]

[h: spellName = json.get(oOggetto,"libName")]

[macro("consumables/haveSogliaPotere@this"): json.append(oToken,spellName)]
[h, if(!macro.return): return (0,1)]

[macro("consumables/getSogliaPotereRate@this"): json.append(oToken,oOggetto)]
[h: iRate = 100 - macro.return]

[h: iRoll = roll(1,100)]
[h: appendMessaggio(oToken,"risultatoSogliaPotere",strformat("1d100 = %{iRoll}, probabilità fallimento = %{iRate}%"))]

[h: macro.return = iRoll > iRate]