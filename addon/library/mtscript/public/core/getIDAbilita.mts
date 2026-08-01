[h: source = json.get(macro.args,0)]
[h: nomeAb = json.get(macro.args,1)]

[macro("core/getStatsAbilita@this"):macro.args]
[h: oStats = macro.return]
[h: sEvento = getStrProp(oStats,"evento")]
[h: eventList = getProperty(sEvento,source)]
[h, if(json.type(eventList) != "OBJECT"): eventList = "{}"]

[h: index = 0]
[h: abID = ""]
[h: flag = 1]
[h, while(flag == 1) ,code:{
	[h: abID = strformat("%{nomeAb}%{index}")]
	[h: index = index+1]
	[if(json.contains(eventList,abID) == 0): flag = 0]
}]

[h: macro.return = abID]