[h: source = json.get(macro.args,"source")]
[h: oInterattivo = json.get(macro.args,"interattivo")]

[h: switchToken(source)]
[macro("utility/getCenterTokenXY@this"): source]
[h: iSourceX = json.get(macro.return,0)]
[h: iSourceY = json.get(macro.return,1)]

[h: switchToken(oInterattivo)]
[h, if(json.type(parametri) != "OBJECT"): parametri = "{}"]

[h: bFlag = 1]

[macro("utility/getCenterTokenXY@this"): oInterattivo]
[h: iDoorX = json.get(macro.return,0)]
[h: iDoorY = json.get(macro.return,1)]

[h: iDistance = sqrt((iDoorX-iSourceX)^2 +(iDoorY-iSourceY)^2)]
[macro("utility/getSizeReach@this"): source]
[h: iReach = macro.return*1.5]

[h, if(iDistance > iReach), code:{
	[broadcast("Sei troppo lontano per aprire la porta ",getPlayerName())]
	[bFlag = 0]
}]

[h: bChiusa = 0]
[h, if(bFlag), code:{
	[h: bChiusa = json.get(parametri,"chiusa")]
	[if(!isNumber(bChiusa)): bChiusa = 0]
	[h: parametri = json.set(parametri,"chiusa",bChiusa)]
	[if(bChiusa), code:{
		[broadcast("Questa porta &egrave; chiusa",getPlayerName())]
		[bFlag = 0]
	}]
}]

[h, if(bFlag), code:{
	[h: sSenso = upper(json.get(parametri,"senso"))]
	[h, if(sSenso == ""): sSenso = "ORARIO"]

	[h: iAOriginale = json.get(parametri,"angolo")]
	[h: iAngolo= getTokenFacing()]


	[h, if(!isNumber(iAOriginale)): iAOriginale = iAngolo]
	[h: parametri = json.set(parametri,"angolo",iAOriginale,"senso",sSenso)]

	[h, if(sSenso == "ORARIO"): iRotazione = 90; iRotazione = -90]
	[h, if(iAngolo != iAOriginale): iAngolo = iAOriginale ; iAngolo = iAOriginale+iRotazione]
	[h: setTokenFacing(iAngolo)]
}]
