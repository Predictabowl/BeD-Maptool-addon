[h: oEffect = macro.args]
<!-- DA TESTARE -->

[h: bFlag = 0]
[h, if(!json.isEmpty(oEffect)), code:{
	[sTipo = upper(json.get(oEffect,"tipo")]
	[if(sTipo == "MALEDIZIONE"): bFlag = 1]
}]

[h: macro.return = bFlag]
