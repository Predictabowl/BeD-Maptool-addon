[h: sId = arg(0)]

[h: oAbPa = getDaMemoria(getMacroLocation(),"ABILITAPASSIVE")]
[h: macro.return = json.get(oAbPa,sId)]