[h, if(json.type(macro.args) == "OBJECT"), code:{
	[h: source = json.get(macro.args,"source")]
	[h: target = json.get(macro.args,"target")]
	[h: fMancare = json.get(macro.args,"mancare")]
	[h: fMolfMancare = json.get(macro.args,"moltiplicatoreMancare")]	
};{
	[source = arg(0)]
	[if (argCount()>1): target = arg(1); target = ""]	
	[if (argCount()>2): fMancare = arg(2); fMancare = ""]
	[if (argCount()>3): fMoltMancare = arg(3); fMoltMancare = 1]	
}]

[h: source = findToken(source)]
[h: target = findToken(target)]
[h, if(source==""): source = currentToken()]
[h: bResult = 0]

[if (target == source), code:{
	[setMessaggio(source,"mancareResult","Colpito!")]
	[return(0,0)]
}]

[if(popOverride(source,"forzaMancare") > 0), code:{
	[setMessaggio(source,"mancareResult","Mancato!")]
	[return(0,1)]
}]

[h, if(popOverride(source,"forzaNoMancare") > 0): fMancare = -1000.0]

[h, if(!isNumber(fMancare)), code:{
	[if (target != ""): fElusione = getElusione(target); fElusione = 0]
	[fMancare = getMancareProb(getMancare(source) + fElusione)]
}]

[h, if(fMancare <= 1): fMancare = fMancare*1000]
[h: fMancare = fMancare*fMoltMancare]
[h: fMancare = round(fMancare)]

[h: dado = (1d1000)]
[h: sMessage = strformat("<span title='%{dado} [%{fMancare}]'>")]
[h, if (dado <= fMancare), code:{
	[sMessage = strformat("%{sMessage}Bersaglio Mancato.</span>")]
	[bResult = 1]
};{
	[sMessage = strformat("%{sMessage}Bersaglio Colpito!</span>")]
	[bResult = 0]
}]

[macro("core/verbosePrint@this"):sMessage]
[h: msg = macro.return]

[h: setMessaggio(source,"mancareResult",msg)]
[h: macro.return = bResult]