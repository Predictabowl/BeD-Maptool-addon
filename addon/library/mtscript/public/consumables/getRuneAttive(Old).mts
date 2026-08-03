[h: oToken = arg(0)]

[h: oRuneArray = "[]"]
[h: oArma = getArmaCustomData(oToken,1)]
[h, if(!json.isEmpty(oArma)), code:{
	[oRuneSet = json.get(oArma,"RuneInstallate")]
	[if(json.type(oRuneSet) != "OBJECT"): oRuneSet = "{}"]
	[aRuna = json.append(1,1)]
	[if(json.contains(oRuneSet,"Runa_1")): oRuneArray = json.append(oRuneArray,aRuna)]
	[macro("combat/isStile2M@this"): oToken]
	[bFlag = macro.return]
	[aRuna = json.append(1,2)]
	[if(bFlag && json.contains(oRuneSet,"Runa_2")): oRuneArray = json.append(oRuneArray,aRuna)]
}]

[h, macro("combat/isStile2A@this"): oToken]
[h: bFlag = macro.return]
[h, if(bFlag), code:{
	[oArma = getArmaCustomData(oToken,2)]
};{
	[oArma = "{}"]
}]

[h, if(!json.isEmpty(oArma)), code:{
	[oRuneSet = json.get(oArma,"RuneInstallate")]
	[if(json.type(oRuneSet) != "OBJECT"): oRuneSet = "{}"]
	[aRuna = json.append(1,2)]
	[if(json.contains(oRuneSet,"Runa_1")): oRuneArray = json.append(oRuneArray,aRuna)]
}]

[h: macro.return = oRuneArray]
