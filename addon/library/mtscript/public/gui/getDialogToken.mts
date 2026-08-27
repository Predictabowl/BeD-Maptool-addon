[h: dialogName = arg(0)]

[h: dialogProps = getDialogProperties(dialogName)]
[h, if(json.isEmpty(dialogProps)): return(0,"")]
[h: macro.return = json.get(dialogProps,"value")]