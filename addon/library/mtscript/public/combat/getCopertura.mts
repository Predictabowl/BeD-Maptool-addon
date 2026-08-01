[h: arg0 = arg(0)]

[h, if(json.type(arg0) == "OBJECT"), code:{
	[h: difensore = json.get(arg0,"difensore")]
	[h: attaccante = json.get(arg0,"attaccante")]
};{
	[difensore = arg(0)]
	[if(argCount()>1): attaccante = arg(1); attaccante = ""]
}]

[h, if(attaccante != ""), code:{
	[bSpalle = isAlleSpalle(attaccante,difensore)]
	[h, if(bSpalle): iPos = -1; iPos = 1]	
};{
	[iPos = 1]
}]


[h: fCopertura = 0]
[h: oCopertura = getProperty("Stack_Coperture",difensore)]

[h, foreach(sSlot,oCopertura), code:{
	[oSlot = json.get(oCopertura,sSlot)]
	[iDirezione = json.get(oSlot,"direzione")]
	[if(iDirezione == iPos || iDirezione == 0): fValore = json.get(oSlot,"valore"); fValore = 0]
	[fCopertura = 1-(1-fCopertura)*(1-fValore)]
}]

[h: aCopertureMappa = "[]"]
[h, if(attaccante != ""), code:{
	[macro("utility/getVisionCopertura@this"): json.append(attaccante,difensore)]
	[fCopertura = 1-(1-fCopertura)*(1-macro.return)]
	
	[macro("getCopertureMappa@Lib:Meccaniche"): json.append(attaccante, difensore)]
	[aCopertureMappa = macro.return]
}]

[h, foreach(fCopMappa, aCopertureMappa), code :{
	[fCopertura = 1-(1-fCopertura)*(1-fCopMappa)]
}]

[h: fStatModifier = getStatModifier(difensore,"Copertura")]
[h: fCopertura = 1-(1-fCopertura)*(1-fStatModifier)]

[h: macro.return = fCopertura]
