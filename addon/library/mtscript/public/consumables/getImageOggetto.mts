[h, if(json.type(macro.args) == "ARRAY"), code:{
	[oOggetto = json.get(macro.args,0)]
	[iSize = json.get(macro.args,1)]	
};{
	[oOggetto = macro.args]
	[iSize = ""]
}]

[macro("consumables/getInfoOggetto@this"):oOggetto]
[h: oInfo = macro.return]

[h: sTabella = json.get(oInfo,"tabellaImg")]
[h: iRigaTab = json.get(oInfo,"imageID")]
[h, if(isNumber(iSize)): oReturn = tableImage(sTabella,iRigaTab,iSize); oReturn = tableImage(sTabella,iRigaTab)]

[h: macro.return = oReturn]