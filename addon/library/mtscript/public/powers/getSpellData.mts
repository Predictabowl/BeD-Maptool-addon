[h: oToken = arg(0)]
[h: sTag = arg(1)]

[h: sData = "spellCustomData"]
[h: oEffetto = getEffetto(oToken, Stag)]
[h, if(json.isEmpty(oEffetto)), code:{
	[sEx = strformat("<span style='color:red; font-weight:bold;'>EXCEPTION</span>: getSpellData@Lib:Poteri was called on Token (%s) for effect (%{sTag}), but the effect was not found.", getName(oToken)))]
	[assert(0, sEx)]
}]
[h: oSpellData = json.get(oEffetto,sData)]
[h: return(0,oSpellData)]

