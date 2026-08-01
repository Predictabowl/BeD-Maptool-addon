[h: source = json.get(macro.args,"token")]
[h: multiplier = json.get(macro.args,"MoveMul")]
[h: modifier = json.get(macro.args,"MoveMod")]

[h, if(modifier == ""): modifier = 0]
[h, if(multiplier == ""): multiplier = 0]

[h: switchToken(source)]
[macro("movement/getMoveModifiers@this"): source]
[h: oldMod = json.get(macro.return,"MoveMod")]
[h: oldMul = json.get(macro.return,"MoveMul")]
[h: oldMod = OldMod + modifier]
[h: oldMul = OldMul + multiplier]

[macro("movement/setMoveModifiers@this"): json.set("","token",source,"MoveMul",oldMul,"MoveMod",oldMod)]