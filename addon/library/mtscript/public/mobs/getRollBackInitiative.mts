[h: target = macro.args]

[h:broadcast(strformat("DEPRECATED: %s@%s",getMacroName(),getMacroLocation()))]

[h: switchToken(target)]
[macro("utility/getFrazionePersonale@this"): target]
[h: my = macro.return]

[macro("utility/getMapFrazione@this"): 0]
[h: iMapF = macro.return]

[h: last = max(my,iMapF)]

[h: macro.return = last] 