[h: oToken = json.get(macro.args,0)]
[h: sTipo = upper(json.get(macro.args,1))]

[h: oMarchi = getProperty ("Marchi",oToken)]
[h, if(json.type(oMarchi) != "OBJECT"), code:{
	[oMarchi = "{}"]
	[setProperty("Marchi",oMarchi,oToken)]
}]

[h, if (json.contains(oMarchi,sTipo)==1): oResult = json.get(oMarchi,sTipo); oResult = "{}"]

[h: macro.return = oResult]