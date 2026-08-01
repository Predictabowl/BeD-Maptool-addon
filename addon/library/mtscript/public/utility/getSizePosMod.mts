[h: target = macro.args]

[h: offsetX = getTokenWidth(target)/2]
[h: offsetY = getTokenHeight(target)/2]

[h: macro.return = json.append(offsetX,offsetY)]
