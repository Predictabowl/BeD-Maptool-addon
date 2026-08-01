[h: oToken = json.get(macro.args,0)]
[h: sTipo = json.get(macro.args,1)]

[h: switchToken(oToken)]
[h: return = 0]
[h, foreach(sEffetto, Lista_Effetti), code:{
	[oEffetto = json.get(Lista_Effetti,sEffetto)]
	[effTipo = json.get(oEffetto,"tipo")]
	[if(effTipo == sTipo): return = 1]
}]

[macro.return = return]