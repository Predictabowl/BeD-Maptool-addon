[h: oToken = json.get(macro.args, "source")]

[h: oData = getDaMemoria(oToken,"estenuante-cooldown")]
[h, foreach(sNomeAb, oData), code: {
	[h: oEstParam = json.append(oToken, sNomeAb)]
	[macro("class_skills/getEstenuanteValue@this"): oEstParam]
	[iValue = macro.return - 1]
	[h, if(iValue > 0), code:{
		[macro("class_skills/updateEstenuanteVal@this"): json.append(oEstParam, iValue)]
	};{
		[macro("class_skills/delEstenuante@this"): oEstParam]
	}]
	[h, macro("gui/putSkillToRoundUpdate@this"): json.append(oToken, sNomeAb, "PF")]
}]

[h: oUpdatedData = getDaMemoria(oToken,"estenuante-cooldown")]
[h, if(json.length(oUpdatedData) < 1), code:{
	[delDaMemoria(oToken,"estenuante-cooldown")]
	[eventUninstaller(oToken, "On_Round_End", "estenuante-cooldown")]
}]
[h: macro.return = ""]
