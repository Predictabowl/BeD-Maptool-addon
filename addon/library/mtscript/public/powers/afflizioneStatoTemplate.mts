[h: target = json.get(macro.args,"target")]
[h: bRemove = json.get(macro.args,"remove")]
[h: oParams = json.get(macro.args,"parametri")]
[h: iMolt = json.get(macro.args,"moltiplicatore")]

[h, if(bRemove ==""): remove = 0]
[h: sNomeStato = json.get(oParams,"nomeStatoBase")]
[h: sParentEffect = json.get(oParams, "parentEffect")]

[h, if(!isNumber(iMolt)): iMolt = 1]

[h: sCheckTag = "indottoDaAfflizione"]

[h: msg = ""]
[h, if(bRemove == 1), code:{
	[macro("core/getOtherInfoEffetto@this"): json.append(target,sNomeStato)]
	[oOtherInfo = macro.return]
	[bCheck = json.get(oOtherInfo,sCheckTag)]
	[if(bCheck == 1): rimuoviEffetto(target,sNomeStato)]
};{
	[h: param = json.set("","target",target,"durata",8,"effetto",sNomeStato,"moltiplicatore",iMolt)]
	[macro("powers/getParamStatoBase@this"): param]
	[macro("core/ApplyEffectIfNotPresent@this"): macro.return]
	[macro("utility/popMessaggio@this"):json.set("","token",target,"key","msgEffetto")]
	[msg = macro.return]
	[oOtherInfo = json.set("",sCheckTag,1, "parentEffect", sParentEffect)]
	[macro("core/addOtherInfoEffetto@this"): json.append(target,sNomeStato,oOtherInfo)]
}]

[h: macro.return = msg]