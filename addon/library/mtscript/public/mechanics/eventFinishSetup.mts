[h: source = json.get(macro.args,"source")]

[h: switchToken(source)]
[h: sControl = "setupMarchio"]

[h: Lista_Dati = deleteStrProp(Lista_Dati,sControl)]
[macro("events/eventUninstaller@this"): json.append(source,"on_Action_End",sControl)]