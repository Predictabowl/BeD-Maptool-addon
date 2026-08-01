[h: target = json.get(macro.args,"target")]
[h: key = json.get(macro.args,"key")]

[h: delLMM(target,key)]
[macro("inputLMM@"+getMacroLocation()):target]