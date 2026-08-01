[h: token = json.get(macro.args,0)]
[h: sField = json.get(macro.args,1)]
[h: oValue = json.get(macro.args,2)]

[h: return = ""]
[h: listaEff = getProperty("Lista_Effetti",token)]
[h, foreach(sEffect,listaEff), code:{
	[oFields = json.get(listaEff,sEffect)]
	[check = json.get(oFields,sField)]
	[h, if(check == oValue): return = json.append(return,sEffect)]
}]
[h: macro.return = return]