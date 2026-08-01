[h: source = json.get(macro.args,"source")]
[h: bOpp = json.get(macro.args,"opportunita")]
[h: bBasic = json.get(macro.args,"onlyBasic")]
[h: switchToken(source)]

[h: iNumAtt = getNumAttacchiRimasti(source)]
[h, if(bBasic != 1): iNumAtt = iNumAtt + getNumPoteriOffensivi(source)]

[r, if(bOpp == 1), code:{
	[h: iNumAtt = iNumAtt + getNumAttacchiRimasti(source,1)]
}]

[macro("utility/isCombat@this"):0]
[h: bCombat = macro.return]

[h, if(iNumAtt <= 0  && bCombat): result = 0; result = 1]
[h: macro.return = result]