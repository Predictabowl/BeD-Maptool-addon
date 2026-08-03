[h: source = arg(0)]
[h: sLibName = arg(1)]
[h, if(argCount() > 2): oUseParam = arg(2); oUseParam = ""]

[h, if(json.isEmpty(oUseParam)): oUseParam = getSpellStartData(source,"itemUseParam")]
[h: sTipo = upper(json.get(oUseParam,"tipoOggetto"))]

[h, switch(sTipo), code:
case "RUNA":{
	[h: sArma = json.get(oUseParam,"nomeArma")]
	[h: iRuna = json.get(oUseParam,"slotRuna")]
	[h: oOggetto = getRunaFromArma(source,sArma,iRuna)]
};
default: {
	[iSlot = json.get(oUseParam,"slotVeloce")]
	[oOggetto = getFromSlotVeloce(source,iSlot)]
}]

[h: macro.return = oOggetto]