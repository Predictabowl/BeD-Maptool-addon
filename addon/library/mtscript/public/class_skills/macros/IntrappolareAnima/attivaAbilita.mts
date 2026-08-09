[h: source = macro.args]

[h: sNomeAb = "IntrappolareAnima"]
[h: sTag = "AnimaConsumata"]

[macro("utility/getCorpses@lib:it.aldinucci.piero.bed.maptool.ruleset"):0]
[h: oCorpses = macro.return]
[h: iNum = json.length(oCorpses)]
[h: oCorpse = ""]
[bFlag = 1]
[h: iInd = 0]
[h, while(bFlag && iInd < iNum), code:{
	[oToken = json.get(oCorpses,iInd)]
	[oLista = getProperty("Lista_Dati",oToken)]
	[sAnima = getStrProp(oLista,sTag)]
	[if(sAnima != 1), code:{
		[bFlag = 0]
		[oCorpse = oToken]
	}]
	[iInd = iInd+1]
}]

[h, if(oCorpse != ""), code:{
	[switchToken(oCorpse)]
	[Lista_Dati = setStrProp(Lista_Dati,sTag,1)]
	[macro(buildClassSkillMacroName("IntrappolareAnima","calBonus")): source]
	[h: iNumAnime = macro.return]
	[macro("powers/modAnime@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(source,iNumAnime)]
	[sMsg = strformat("Frammenti di anima guadagnati =%{iNumAnime}")]
	[appendMessaggio(source,"strAbilitaAttivata",sMsg)]
};{
	[sMsg = "Fallimento (nessun cadavere provvisto di anima sul campo di battaglia)"]
	[appendMessaggio(source,"strAbilitaAttivata",sMsg)]
	[return(0,1)]
}]

[h: macro.return = 0]