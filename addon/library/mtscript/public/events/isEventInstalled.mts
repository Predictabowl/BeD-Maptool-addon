[h: oToken = json.get(macro.args,0)]
[h: sEventType = json.get(macro.args,1)]
[h: sEventName = json.get(macro.args,2)]

[h: oEvents = getProperty(sEventType,oToken)]
[h, if(json.contains(oEvents,sEventName)): bResult =1; bResult = 0]

[h: macro.return = bResult]