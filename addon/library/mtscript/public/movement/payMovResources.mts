[ħ: source = currentToken()]

[h: usedMov = getMoveCount()]
[macro("movement/getMoveModifiers@this"):source]
[h: multiplier = json.get(macro.args,"MoveMul")]
[h: modifier = json.get(macro.args,"MoveMod")]
[h: usedMov = ceil((usedMov+modifier)*multiplier)]

[h: param = json.append(source,0,0,0,usedMov)]
[macro("core/payAction@this"): param]
[h: flag = macro.return]