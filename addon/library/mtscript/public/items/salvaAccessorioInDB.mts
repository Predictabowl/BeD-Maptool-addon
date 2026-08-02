[h: oOggetto = arg(0)]
[h, if(argCount()>1): sId = arg(1); sId = ""]

[h: sCat = json.get(oOggetto,"categoria")]
[h: sProperty = sCat+"_Json"]

[h: oOggetti = getLibProperty(sProperty,getMacroLocation())]

[h, if(json.type(oOggetti) != "OBJECT"): oOggetti = "{}"]

[h, if(sId == ""), code:{
	[macro("gui/generateId@this"): json.append(oOggetti,json.get(oOggetto,"nome"))]
	[h: sId = macro.return]
}]

[h: oOggetti = json.set(oOggetti,sId,oOggetto)]
[h: setLibProperty(sProperty,oOggetti,getMacroLocation())]

[h: macro.return = sId]-