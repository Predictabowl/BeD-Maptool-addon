[h: oToken = arg(0)]
[h: sTag = arg(1)]
[h: oData = arg(2)]

[h: sData = "spellCustomData"]
[h: oEffetto = getEffetto(oToken, sTag)]
[h, if(json.isEmpty(oEffetto)), code:{
	[sEx = strformat("<span style='color:red; font-weight:bold;'>EXCEPTION</span>: setSpellData@Lib:Poteri was called on Token (%s) for effect (%{sTag}), but the effect was not found.", getName(oToken)))]
	[assert(0, sEx)]
}]
[h: oEffetto = json.set(oEffetto, sData, oData)]
[h: setEffetto(oToken, sTag, oEffetto)]

[h: return(0,1)]