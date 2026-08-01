[h: oParam = arg(0)]
[h: source = json.get(oParam,"source")]
[h: libName = json.get(oParam,"spellName")]
[h: bCrit = json.get(oParam,"critRes")]

[h: bIsItem = isItemInCast(source,libName)]
[h, if(bIsItem): return(0,0)]

[h: Pmana = getLibProperty("mana",libName)]
[h, if(!isNumber(bCrit)): bCrit = getUltimoCritico(source)]
[h, if(!isNumber(bCrit)): bCrit = 0]

[h, if(!isNumber(Pmana)), code:{
	[h: baseM = listGet(Pmana,0)]
	[h: tipoSconto = listGet(Pmana,1)]
	[h: args = json.set("","source",source,"spellName",libName)]

	[switch(tipoSconto), code:
	case "VarX":{
		[iLMM = getLMM(source, libName)]
		[Pmana = baseM*varX(iLMM)]
		[if(bCrit): Pmana = round(Pmana * calcPercentMod(-getPCrit(source)/100))]
	};
	case "VarUp":{
		[iLMM = getLMM(source, libName)]
		[Pmana = baseM*varUp(iLMM)]
		[if(bCrit): Pmana = round(Pmana * calcPercentMod(-getPCrit(source)/100))]
	};	
	case "Var23":{
		[macro("powers/getAutoLL@this"):args]
		[h: iLL = macro.return]
		[Pmana = baseM*var23(getProperty("Livello",source),iLL)]
		[if(bCrit): Pmana = round(Pmana * calcPercentMod(-getPCrit(source)/100))]
	};
	case "Var21":{
		[macro("powers/getAutoLL@this"):args]
		[h: iLL = macro.return]		
		[Pmana = baseM*var21(getProperty("Livello",source),iLL)]
		[if(bCrit): Pmana = round(Pmana * calcPercentMod(-getPCrit(source)/100))]
	};
	case "MANT":{
		[scontoM = 0]
		[Pmana = baseM]
		[bCrit = 0]
	};
	default :{
		[scontoM = 0]
		[Pmana = baseM]
		[bCrit = 0]
	}]
}]


[macro("powers/getSpellMod@this"): json.append(source,libName,"PM")]
[h: iMod = json.get(macro.return,"mod")]
[h: dPerc = json.get(macro.return,"perc")]

[macro("core/popStatModifier@this"): json.append(source,"PMPerc")]
[h: dPerc = dPerc + macro.return]
[macro("core/popStatModifier@this"): json.append(source,"PMCost")]
[h: iMod = iMod + macro.return]

[h: dPerc = calcPercentMod(dPerc)]
[h: Pmana = (Pmana +iMod)*dPerc]
[h, if(Pmana <0): Pmana = 0]


[h: return(0, round(Pmana))]

[h: Pmana = Pmana*getRecuperoCostoMolt(source, libName)]