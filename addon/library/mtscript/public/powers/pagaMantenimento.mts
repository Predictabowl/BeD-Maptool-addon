[h: source = json.get(macro.args,0)]
[h: sMant= json.get(macro.args,1)]


[h: switchToken(source)]

[h: oMant = json.get(Mantenimenti,sMant)]
[h, if(json.isEmpty(oMant)): arrayEffetti = ""; arrayEffetti = json.get(oMant,"effettiCollegati")]

[h: newArray = ""]
[h, foreach(oEffettoInfo,arrayEffetti), code:{
	[oToken = json.get(oEffettoInfo,"token")]
	[sEffetto = json.get(oEffettoInfo,"nomeEffetto")]
	[macro("core/getEffect@this"): json.append(oToken,sEffetto)]
	[if(json.type(macro.return) == "OBJECT"): newArray = json.append(newArray,oEffettoInfo)]
}]

[bFlag = 0]


[h, if(!json.isEmpty(newArray)), code:{
	[oMant = json.set(oMant,"effettiCollegati",newArray)]
	[Mantenimenti = json.set(Mantenimenti,sMant,oMant)]
	[sMacroCosto = json.get(oMant,"macroCosto")]
	[sMCostoParam = json.get(oMant,"macroCostoParam")]
	[macro(sMacroCosto): sMCostoParam]
	[bFlag = payAction(macro.return)]
}]


[h, if(!bFlag), code:{
	[macro("powers/delMantenimento@this"): json.append(source,sMant)]
}]