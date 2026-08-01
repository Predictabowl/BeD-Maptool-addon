[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: sSCap= json.get(macro.args,"sCap")]
[h: sTCap = json.get(macro.args,"tCap")]


[macro("mobs/getLastRollCapacita@this"): json.append(source,sSCap)]
[h: iSCap = macro.return]
[macro("mobs/getLastRollCapacita@this"): json.append(target,sTCap)]
[h: iTCap = macro.return]

[h, if(iSCap > iTCap): return = 1; return = 0]

[h: macro.return = return]