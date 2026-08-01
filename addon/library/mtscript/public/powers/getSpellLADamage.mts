[h: target = json.get(macro.args,"target")]
[h: source = json.get(macro.args,"source")]
[h: sSpellName = json.get(macro.args,"spell")]
[h: sDifesa = json.get(macro.args,"difesa")]
[h: iMoltiplicatore = json.get(macro.args,"moltiplicatore")]
[h: iLA = json.get(macro.args,"LA")]
[h, if(json.contains(macro.args,"baseDmg") == 0), code:{
	[h: sDmgBase = "0"]
};{
	[h: sDmgBase = json.get(macro.args,"baseDmg")]
}]

[h, if(sDifesa==""), code:{
	[macro("combat/getUltimaDifesa@this"):source]
	[h: sDifesa = macro.return]
}]

[h: fDmgPerc = getModDmgPerc(source,target)]
[h: iLD = getLDPos(source,target)]

[h: iBonusDmg = (iLA - iLD) * iMoltiplicatore]
[h: iDmgBase = eval(string(sDmgBase))]
[h: iResult = (iDmgBase + iBonusDmg) * fDmgPerc]

[r, if(sDifesa == "parato"), code:{
	[h: param = json.set("","target",target,"source",source,"danno",iResult)]
	[macro("combat/getBloccoDmg@this"):param]	
	[h: value = floor(iResult - macro.return)]
	[h: iResult = macro.return]
	[h: message = strformat("(danni parati: %{value})")]
	[macro("core/verbosePrint@this"):message]
	[h: message = macro.return]
	[macro("utility/setMessaggio@this"):json.set("","token",source,"key","riduzioneDanni","msg",message)]
};{}]

[macro("utility/trunc@this"):iResult]
