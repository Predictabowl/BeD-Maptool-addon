[h: oToken = json.get(macro.args, "source")]

[h: oData = getDaMemoria(oToken,"estenuante-cooldown")]
[h, foreach(sNomeAb, oData), code: {
	[h: oEstParam = json.append(oToken, sNomeAb)]
	[macro("class-skills/getEstenuanteValue@this"): oEstParam]
	[iValue = macro.return - 1]
	[h, if(iValue > 0), code:{
		[macro("class-skills/updateEstenuanteVal@this"): json.append(oEstParam, iValue)]
	};{
		[macro("class-skills/delEstenuante@this"): oEstParam]
	}]
	
}]

[h: oUpdatedData = getDaMemoria(oToken,"estenuante-cooldown")]
[h, if(json.length(oUpdatedData) < 1), code:{
	[delDaMemoria(oToken,"estenuante-cooldown")]
	[eventUninstaller(oToken, "On_Round_End", "estenuante-cooldown")]
}]
[h: macro.return = ""]
