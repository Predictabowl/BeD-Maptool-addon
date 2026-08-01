[h: source =json.get(macro.args,"source")]

[h: sEventName = "Energia Distruttiva"]

[macro("events/eventUninstaller@this"): json.append(source,"On_Attack",sEventName)]
[macro("events/eventUninstaller@this"): json.append(source,"On_Action_Interrupt",sEventName)]
[macro("events/eventUninstaller@this"): json.append(source,"On_Action_End",sEventName)]

[h:macro.return = ""]