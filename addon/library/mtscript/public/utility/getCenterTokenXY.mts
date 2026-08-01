[h: target = macro.args]

[h: switchToken(target)]

[macro("getSizePosMod@this"): target]
[h: iTokenX = getTokenX()+ json.get(macro.return,0)]
[h: iTokenY = getTokenY()+json.get(macro.return,1)]

[h: macro.return = json.append(iTokenX,iTokenY)]
