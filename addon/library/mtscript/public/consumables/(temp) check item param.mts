[h: source = arg(0)]
[h: sLibName = arg(1)]
[h: oUseItem = arg(2)]

[h: sTipoOgg = upper(fetchConsumableProp(sLibName,"tipo_oggetto"))]
[h: bClearance = 1]

[h:switchToken(source)]

[h, switch(sTipoOgg), code:
case "RUNA":{
	[sArma = json.get(oUseItem,"nomeArma")]
	[iSlotRuna = json.get(oUseItem,"slotRuna")]
	[iCariche = getCaricheRuna(source,sArma,iSlotRuna)]
	[if(iCariche < 2): delRunaFromArma(source,sArma,iSlotRuna); modCaricheRuna(source,sArma,iSlotRuna,-1)]
};
case "POZIONE":{
	
	[iSlotV = json.get(oUseItem,"slotVeloce")]
	[oOggetto = getFromSlotVeloce(source,iSlotV)]

	[macro("mechanics/checkTossico@this"): json.append("",source,oOggetto)]
	[iToxRes = macro.return]
	[if(iToxRes > 0), code:{
		[macro("mechanics/failedToxicEffect@this"):json.append(source,iToxRes)]
		[broadcast(macro.return)]
		[bClearance = 0]
	}]

	[macro("consumables/checkSogliaPotere@this"): json.append("",source,oOggetto)]
	[bSP = macro.return]
	[if(bSP && bClearance), code:{
		[msgOutput="(PLACEHOLDER) Soglia di potere fallita, l'oggetto viene perso."]
		[broadcast(msgOutput)]
		[bClearance = 0]
	}]

	[if(bClearance), code:{
		[pushOverride(source,"fixedLL")]
		[pushOverride(source,"noCrit")]
		[iLL = getLLOggetto(oOggetto)]
		[Lista_Dati = setStrProp(Lista_Dati,"FixedLL",iLL)]
	}]
	
};
default: {
}]

[h: macro.return = 1]
