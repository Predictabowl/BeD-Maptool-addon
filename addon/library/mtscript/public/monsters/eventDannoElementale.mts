<!-- Incatamento di prova, da testare -->

[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: sElemento = json.get(macro.args,"elemento")]
[h: sNome = json.get(macro.args,"nomeInc")]
[h: iLL = json.get(macro.args,"LL")]
[h, if(!isNumber(iLL)): iLL = getProperty("LL_Base",source)]
[h: sDmgLP = json.get(macro.args,"dannoLP")]
[h: sDmgBase = json.get(macro.args,"dannoBase")]
[h: oEventParam = json.get(macro.args,"eventParam")]



[h: sMsg = ""]
[h, if(isMaterialEvent(source,oEventParam)), code:{
	[sNomeInc = strformat("%{sNome} (%{sElemento}):")]
	[if(sDmgBase != "" && sDmgBase != 0): sNomeInc = strformat("%sNomeInc} %{sDmgBase} +")]

	[h: iLP = iLL - getResistance(json.append(target,sElemento))]

	[macro("powers/getSpellDamage@this"): json.set("","LP",iLP,"dmgLP",sDmgLP,"target",target,"source",source,"baseDmg",sDmgBase)]
	[iDanno = macro.return]

	[h, if(iDanno >0), code:{
		[sNomeInc = strformat("%{sNomeInc} (%{sDmgLP})x%{iLP}")]
		[macro("core/DannoTarget@this") : json.set("","target",target,"source",source,"valore",iDanno,"verbose",0,"origine",sNomeInc)]
		[macro("utility/popMessaggio@this"): json.set("","token",target,"key","strDanno")]
		[sMsg = macro.return]
	}]
}]

[h: macro.return = sMsg]