[h: oOggetto = arg(0)]
[h: oToken = arg(1)]
[h: sLibName = json.get(oOggetto,"libName")]

[h: iTox = fetchConsumableProp(sLibName,"Tossicita")]
[h, if(isNumber(iTox)): return(0, iTox)]

[h: baseM = listGet(iTox,0)]
[h: tipoSconto = listGet(iTox,1)]
[h, switch(tipoSconto), code:
case "VarO":{
	[macro("consumables/getLivelloOggetto@this"): oOggetto]
	[iTox = baseM*varO(macro.return)]
	[bCrit = getUltimoCritico(oToken)]
	[if(bCrit == 1): iTox = iTox * calcPercentMod(-getPCrit(oToken)/100)]
	[iTox = round(iTox)]
};
default :{
	[iTox = 0]
}]

[h: macro.return = iTox]
