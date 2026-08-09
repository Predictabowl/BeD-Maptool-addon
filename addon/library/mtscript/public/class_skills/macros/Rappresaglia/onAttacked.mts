[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]

[h: libName = "Rappresaglia"]
[h: addSpellStartData(source,libName,target)]

[h: macro.return = ""]