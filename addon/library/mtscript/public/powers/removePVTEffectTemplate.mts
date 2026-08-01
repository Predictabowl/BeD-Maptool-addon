[h: target = json.get(macro.args,"target")]
[h: remove = json.get(macro.args,"remove")]

[h: oParam = json.get(macro.args,"parametri")]
[h: sPVTName = json.get(oParam,"pvtName")]

[h, if(remove == 1), code:{
	[macro("core/removePVT@this"): json.append(target,sPVTName)]
}]