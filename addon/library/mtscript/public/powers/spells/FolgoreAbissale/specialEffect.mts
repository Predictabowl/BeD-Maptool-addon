[h: target = json.get(macro.args,"target")]
[h: bRemove = json.get(macro.args,"remove")]]
[h: oParam = json.get(macro.args,"parametri")]

[h: source = json.get(oParam,"source")]
[h: spellName = "FolgoreAbissale"]
[h: lDati = getProperty("Lista_Dati",target)]
[h: sDataName = strformat("FolgoreAbissale%{source}")]

[h: msg = ""]
[h, if(bRemove != 1), code:{

	[h: iDanno = json.get(oParam,"danno")]
	[iMaxDurata = json.get(oParam,"durata")]
	[nomeDec = fetchSpellProp(spellName,"nome_decorativo")]
	[sOrigine = strformat("<br><img src='%s' width='25' height='25' /> &nbsp; %s",fetchSpellImage(spellName), nomeDec)]
	
	[h: nomeEffetto = strformat("%s (%s)",nomeDec,getName(source))]

	[iDurata = getStrProp(lDati,sDataName)]
	[if(!isNumber(iDurata)): iDurata = iMaxDurata-1; iDurata = iDurata -1]
	[lDati = setStrProp(lDati,sDataName,iDurata)]

	[iDivisore = 2^(iMaxDurata-iDurata)]
	[h: iDanno = ceil(iDanno/iDivisore)]
	[h: dannoParam = json.set("","target",target,"source",source,"valore",iDanno,"origine",sOrigine,"verbose",0)]
	[macro("core/DannoTarget@lib:it.aldinucci.piero.bed.maptool.ruleset"): dannoParam]
	[macro("utility/popMessaggio@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set("","token",target,"key","strDanno")]
	[msg = macro.return]
};{
	[lDati = deleteStrProp(lDati,sDataName)]
}]

[h: setProperty("Lista_Dati",lDati,target)]
[h: macro.return = msg]
