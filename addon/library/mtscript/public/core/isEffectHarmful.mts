[h: oEffetto = macro.args]

[h: sTipo = upper(json.get(oEffetto,"tipo"))]
[h: bFlag = 0]
[h, if (sTipo == "NOCIVO"): bFlag = 1]

[h: otherInfo = json.get(oEffetto,"otherInfo")]
[h, if(!json.isEmpty(otherInfo) && bFlag == 0), code:{
	[spellName = json.get(otherInfo,"spellName")]
	[if(spellName != ""), code:{
		[macro("isHarmful@Lib:Poteri"): spellName]
		[bFlag = macro.return]
	}]
}]

[h: macro.return = bFlag]