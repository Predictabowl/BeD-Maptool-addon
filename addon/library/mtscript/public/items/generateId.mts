[h: oJson = arg(0)]
[h: sPrefix = upper(arg(1))]

[h: sPrefix = replace(sPrefix,"'","")]
[h: k = 1]
[h: sId = strformat("%{sPrefix}-%{k}")]
[h, while(json.contains(oJson,sId)), code:{
	[k = k + 1]
	[sId = strformat("%{sPrefix}-%{k}")]
}]

[h: macro.return = sId]