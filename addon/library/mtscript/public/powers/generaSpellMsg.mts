[h: source=json.get(macro.args,0)]
[h: target =json.get(macro.args,1)]

[h: sKey = "strPotere"]
[h: appendMessaggio(source,sKey,popMessaggio(source,"msgEventOn_Opportunita"))]
[h: appendMessaggio(source,sKey,popMessaggio(source,"msgEventOn_Spellcast_at"))]
[h: appendMessaggio(source,sKey,popMessaggio(target,"msgEventOn_Spellcasted"))]
[h: appendMessaggio(source,sKey,popMessaggio(source,"msgEventOn_Attack"))]
[h: appendMessaggio(source,sKey,popMessaggio(target,"msgEventOn_Attacked"))]
[h: appendMessaggio(source,sKey,popMessaggio(target,"msgEventOn_Dodge"))]
[h: appendMessaggio(source,sKey,popMessaggio(target,"msgEventOn_Block"))]
[h: appendMessaggio(source,sKey,popMessaggio(source,"criticalResult"))]
[h: appendMessaggio(source,sKey,popMessaggio(target,"msgEventOn_Critical"))]

[h, if(source != target), code:{
	[h: appendMessaggio(source,sKey,popMessaggio(source,"mancareResult"))]
	[h: appendMessaggio(source,sKey,popMessaggio(source,"coperturaResult"))]
	[h: appendMessaggio(source,sKey,popMessaggio(source,"difesaResult"))]
}]

[h: appendMessaggio(source,sKey,popMessaggio(source,"msgEventOn_Hit"))]
[h: appendMessaggio(source,sKey,popMessaggio(target,"msgEventOn_Hitted"))]
[h: appendMessaggio(source,sKey,popMessaggio(source,"strSpellDamage"))]
[h: appendMessaggio(source,sKey,popMessaggio(source,"msgEventOn_Kill"))]
[h: appendMessaggio(source,sKey,popMessaggio(target,"TSResult"))]
[h: appendMessaggio(source,sKey,popMessaggio(target,"msgApplicaEffetto"))]
[h: appendMessaggio(source,sKey,popMessaggio(target,"msgEffetto"))]
[h: appendMessaggio(source,sKey,popMessaggio(target,"strDanno"))]
[h: appendMessaggio(source,sKey,popMessaggio(target,"riduzioneDanni"))]
[h: appendMessaggio(source,sKey,popMessaggio(target,"strCura"))]


[h, if(target!=source), code:{
	[h: appendMessaggio(source,sKey,popMessaggio(target,"strCura"))]
	[h: appendMessaggio(source,sKey,popMessaggio(source,"strDanno"))]
	[h: appendMessaggio(source,sKey,popMessaggio(source,"riduzioneDanni"))]
	[h: appendMessaggio(source,sKey,popMessaggio(source,"strCura"))]
}]
