[h ,if(json.type(macro.args) == "OBJECT"), code:{
	[h: source = json.get(macro.args,"source")]
	[h: fCritico = json.get(macro.args,"critico")]
};{
	[source = arg(0)]
	[if(argCount()>1): fCritico = arg(1); fCritico = ""]
}]

[h: source = findToken(source)]
[h, if(source==""): source = currentToken()]

[h, if(!isNumber(fCritico)): fCritico = getCritProb(getCrit(source))]
[h, if(fCritico <= 1): fCritico = fCritico*1000]
[h: fCritico = round(fCritico)]

[h: dado = (1d1000)]
[h: iDadoCrit = dado + fCritico]

[h, if(getOverride(source,"forzaNoCritico")), code:{
	[macro("combat/setUltimoCritico@this"): json.append(source,0)]
	[delMessaggio(source,"criticalResult")]
	[return(0,0)]
}]

[if(getOverride(source,"forzaCritico") > 0), code:{
	[macro("combat/setUltimoCritico@this"): json.append(source,1)]
	[setMessaggio(source,"criticalResult","CRITICO!")]
	[return(0,1)]
}]

[r, if (iDadoCrit >= 1000),  code: {
	[h: sMessage = strformat("<span title='%{dado}%+d = %d'>CRITICO!</span>",fCritico,iDadoCrit)]
	[h: result =1]
}; {
	[h: sMessage = ""]
	[h: result = 0]
}]
[macro("core/verbosePrint@this"):sMessage]
[h: msg = macro.return]

[macro("combat/setUltimoCritico@this"):json.append(source,result)]
[macro("utility/setMessaggio@this"):json.set("","token",source,"key","criticalResult","msg",msg)]
[h: macro.return = result]