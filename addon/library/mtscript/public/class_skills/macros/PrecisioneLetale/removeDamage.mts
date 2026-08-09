[h: source = json.get(macro.args,"source")]

[h: sLibName = "PrecisioneLetale"]

[h: delDannoArmaAgg(source, sLibName)]
[h: eventUninstaller(source,"On_Action_Teardown",sLibName)]

[h: macro.return = ""]