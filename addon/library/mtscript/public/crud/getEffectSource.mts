[h: oEffetto = arg(0)]

[h: sReturn = ""]

[h: oInfo = json.get(oEffetto,"otherInfo")]
[h, if(!json.isEmpty(oInfo)), code:{
	[sReturn = json.get(oInfo,"origine")]
}]

[h: macro.return = sReturn]