[h: oToken = arg(0)]

[h: switchToken(oToken)]

[h: sRace = trim(lower(Cat_Razziale))]
[h: sVariants = json.append("nonmorto", "non morto", "non-morto")]

[h: macro.return = json.contains(sVariants, sRace)]