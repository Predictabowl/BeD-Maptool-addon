[h: source = arg(0)]

[h: jEntry = getTableEntry("Animali", 2)]
[h: macro.return = json.get(jEntry, "assetid")]
