[h: sKey = arg(0)]

[h, macro("utility/stampaAcronimo@this"): sKey]
[h: sAcro = json.get(macro.return, "acronimo")]
[h: aDescr = json.get(macro.return, "descrizione")]
[h: aInfo = ""]
[h, foreach(sDescr, aDescr), code:{
    [h, macro("utility/textProcessHTML2@this"): sDescr]
    [aInfo = json.append(aInfo, macro.return)]
}]

[h: macro.return = json.set("","acronimo",sAcro,"descrizione",aInfo)]
[r: macro.return]