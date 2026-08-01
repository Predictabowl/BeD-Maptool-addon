[h: target = json.get(macro.args,0)]
[h: sAbilita = json.get(macro.args,1)]

[macro("core/getAbilitaClasse@this"): macro.args]
[h: oAbilita = macro.return]


[h: bResult = 0]
[h, if(!json.isEmpty(oAbilita)), code:{
	[bNascondi = json.get(oAbilita,"nascondiInScheda")]
	[if(bNascondi == 1): bResult = 1]
}]

[h: macro.return = bResult]