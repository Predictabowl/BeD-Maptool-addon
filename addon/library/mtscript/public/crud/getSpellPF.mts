[h: macro.args = arg(0)]
[h: source = json.get(macro.args,"source")]
[h: libName = json.get(macro.args,"spellName")]
[h: bCrit = json.get(macro.args,"critRes")]

[h, if(isItemInCast(source,libName)): return(0,0)]

[h: Pfatica = getLibProperty("PF",libName)]
[h, if(!isNumber(bCrit)): bCrit = getUltimoCritico(source)]
[h, if(!isNumber(bCrit)): bCrit = 0]


[h, if(!isNumber(Pfatica)), code:{
	[iFatica = listGet(Pfatica,0)]
	[tipoSconto = listGet(Pfatica,1)]
	[h: args = json.set("","source",source,"spellName",libName)]
	[macro("powers/getAutoLL@this"):args]
	[h: iLL = macro.return]
	[h: iLMM = getLMM(source, libName)]
	
	[switch(tipoSconto), code:
	case "VarX":{
		[Pfatica = iFatica*varX(iLMM)]
		[if(bCrit): Pfatica = Pfatica * calcPercentMod(-getPCrit(source)/100)]
	};	
	case "Var23":{
		[Pfatica = iFatica*var23(getProperty("Livello",source),iLL)]
		[if(bCrit == 1): Pfatica = Pfatica * calcPercentMod(-getPCrit(source)/100)]
	};
	case "Var21":{
		[Pfatica = iFatica*var21(getProperty("Livello",source),iLL)]
		[if(bCrit == 1): Pfatica = Pfatica * calcPercentMod(-getPCrit(source)/100)]
	};
	case "MANT":{
		[PFatica = iFatica]
		[bCrit = 0]
	};
	default :{
		[Pfatica = iFatica]
		[bCrit = 0]
	}]
}]

[macro("powers/getSpellMod@this"): json.append(source,libName,"PF")]
[h: iMod = json.get(macro.return,"mod")]
[h: dPerc = json.get(macro.return,"perc")]

[macro("core/popStatModifier@this"):json.append(source,"PFCostMod")]
[h: iMod = iMod + macro.return]

[h: dPerc = calcPercentMod(dPerc)]
[h: Pfatica =(Pfatica +iMod)*dPerc]
[h, if(Pfatica <0): Pfatica = 0]

[h: offU = getNumPoteriOffensivi(source)]
[h, if(offU < 1), code:{
	[sTipo = upper(getLibProperty("tipo",libName))]
	[if(sTipo == "OFFENSIVO"): Pfatica = Pfatica +4]
}]

[h, macro("powers/getRecuperoMod@this"): json.append(source, libName)]
[h: return(0, round(Pfatica + macro.return))]

[h: Pfatica = Pfatica*getRecuperoCostoMolt(source, libName)]