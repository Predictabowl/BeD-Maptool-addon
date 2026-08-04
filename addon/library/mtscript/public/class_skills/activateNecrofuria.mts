[h: oToken = arg(0)]

[h, macro("class_skills/isNecrofuriaActive@this"): oToken]
[h, if(macro.return != 1): return(0,0)]

[macro("powers/getAnime@this"): oToken]
[h, if(macro.return < 1): return(0,0)]

[macro("powers/modAnime@this"): json.append(oToken,-1)]
[h: macro.return = 1]
