[h: source = arg(0)]
[h: sLibName = arg(1)]
[h: oUseItem = arg(2)]

[h: sTipoOgg = upper(json.get(oUseItem,"tipoOggetto"))]
[h, if(sTipoOgg == ""): sTipoOgg = upper(fetchConsumableProp(sLibName,"tipo"))]
[h: bClearance = 1]

[h:switchToken(source)]

[h, switch(sTipoOgg), code:
case "RUNA":{
	[sArma = json.get(oUseItem,"nomeArma")]
	[iSlotRuna = json.get(oUseItem,"slotRuna")]
	[iCariche = getCaricheRuna(source,sArma,iSlotRuna)]
	[modCaricheRuna(source,sArma,iSlotRuna,-1)]
};
default: {
	[iSlot = json.get(oUseItem,"slotVeloce")]
	[removeFromSlotVeloce(source,iSlot)]
	[macro("mobs/applyIngombroPenalties@this"): source]
}]

[h: macro.return = 1]
