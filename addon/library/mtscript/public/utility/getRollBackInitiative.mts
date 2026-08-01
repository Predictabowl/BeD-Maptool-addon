[h: target = macro.args]

[h, if(!isCombat()): return(0,"")]
[h: switchToken(target)]
[macro("getFrazionePersonale@this"): target]
[h: my = macro.return]

[macro("getMapFrazione@this"): 0]
[h: iMapF = macro.return]

[h: last = min(my,iMapF)]

[h: macro.return = last] 