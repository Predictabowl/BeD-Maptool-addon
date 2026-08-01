[h: oEffetto = arg(0)]
[h: jFields = arg(1)]

[h: aEffectParams = json.get(oEffetto, "params")]
[h: iParamLength = json.length(aEffectParams)]
[h: sParTag = "parametri"]

[h, for(i, 0, iParamLength), code: {
	[jEffectElement = json.get(aEffectParams, i)]
	[jParametri = json.get(jEffectElement, sParTag)]
	[if(json.type(jParametri) != "UNKNOWN") ,code: { 
		[jParametri = json.merge(jParametri, jFields)]
		[jEffectElement = json.set(jEffectElement, sParTag, jParametri)]
		[aEffectParams = json.set(aEffectParams, i, jEffectElement)]
	}]
}]

[h: oEffetto = json.set(oEffetto, "params", aEffectParams)]
[h: macro.return = oEffetto]