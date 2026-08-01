[h: target = arg(0)]
[h: lDmgType = arg(1)]

[h, foreach(sDmgType, lDmgType), code: {
	[setProperty("Sheet_LD_" + sDmgType, getLD(target, sDmgType),target)]
}]