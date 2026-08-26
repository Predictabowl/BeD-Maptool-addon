[h: sKey = arg(0)]

[h, macro("utility/stampaAcronimo@this"): sKey]
[h: sAcro = json.get(macro.return, "acronimo")]
[h: sDescr = json.get(macro.return, "descrizione")]
[h, macro("utility/textProcessHTML2@this"): sDescr]
[h: sInfo = macro.return]

[h: macro.return = json.set("","acronimo",sAcro,"descrizione",sInfo)]
[r: macro.return]