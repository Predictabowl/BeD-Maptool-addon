<!-- Incatamento di prova, da testare -->

[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: iArma = json.get(macro.args,"arma")]
[h: sElemento = json.get(macro.args,"elemento")]
[h: sNome = json.get(macro.args,"nomeInc")]
[h: iLL = json.get(macro.args,"LL")]
[h: sDmgLP = json.get(macro.args,"dannoLP")]
[h: sDmgBase = json.get(macro.args,"dannoBase")]
[h: oEventParam = json.get(macro.args,"eventParam")]


[h: sMsg = ""]
[h: sTipo = json.get(oEventParam,"tipo")]
[h, if(sTipo == "ATTACCO"), code:{
	[sNomeInc = strformat("%{sNome} (%{sElemento}):")]
	[if(sDmgBase != "" && sDmgBase != 0): sNomeInc = strformat("%sNomeInc} %{sDmgBase} +")]

	[h: iArmaInUso = json.get(oEventParam,"arma")]
	[h: iLP = iLL - getResistance(json.append(target,sElemento))]
	[iDanno = 0]
	[iNumRolls = math.abs(iLP)]
	[for (i,0,iNumRolls), code:{
		[iDanno = iDanno + eval(string(sDmgLP))]
	}]
	[if(iLP < 0): iDanno = -iDanno]
	[if(sDmgBase != ""): iDanno = iDanno eval(string(sDmgBase))]

	[h, if(iDanno >0 && iArma == iArmaInUso), code:{
		[sNomeInc = strformat("%{sNomeInc} %{sDmgLP}x(%{iLP})")]
		[macro("core/DannoTarget@this") : json.set("","target",target,"source",source,"valore",iDanno,"verbose",0,"origine",sNomeInc)]
		[macro("utility/popMessaggio@this"): json.set("","token",target,"key","strDanno")]
		[sMsg = macro.return]
	}]
}]

[h: macro.return = sMsg]