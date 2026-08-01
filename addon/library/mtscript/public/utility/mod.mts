[h: a = json.get(macro.args,0)]
[h: n = json.get(macro.args,1)]
[h: m = a - n *floor(a/n)]
[h: macro.return = m]