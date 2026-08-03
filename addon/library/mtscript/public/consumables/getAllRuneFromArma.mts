[h: oToken = arg(0)]
[h: sArma = arg(1)]

[h: oArma = getArmaCustomData(oToken,sArma)]
[h: oRuneSet = "{}"]
[h, if(!json.isEmpty(oArma)), code:{
	[oRuneSet = json.get(oArma,"RuneInstallate")]
	[if(json.type(oRuneSet) != "OBJECT"): oRuneSet = "{}"]
}]

[h: macro.return = oRuneSet]