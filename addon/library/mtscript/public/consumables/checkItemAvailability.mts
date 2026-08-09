[h: source = arg(0)]
[h: sLibName = arg(1)]
[h: oUseItem = arg(2)]

[h: sTipoOgg = upper(json.get(oUseItem,"tipoOggetto"))]
[h, if(sTipoOgg == ""): sTipoOgg = upper(fetchConsumableProp(sLibName,"tipo"))]

[h:switchToken(source)]

[h, switch(sTipoOgg), code:
case "RUNA":{
	[sArma = json.get(oUseItem,"nomeArma")]
	[iSlotRuna = json.get(oUseItem,"slotRuna")]
	[iCariche = getCaricheRuna(source,sArma,iSlotRuna)]
	[if(iCariche < 1): return(0,0)]
};
default: {}
]

[h: macro.return = 1]
