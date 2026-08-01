[h, if(json.type(macro.args) == "OBJECT"), code:{
	[h: source = json.get(macro.args,"token")]
	[h: iArma = json.get(macro.args,"numArma")]
	[h: sArma = json.get(macro.args,"nomeArma")]
	[h: oArma = json.get(macro.args,"objArma")]
	[if(json.isEmpty(oArma)): oArma = getArma(source,iArma)]
};{
	[source = arg(0)]
	[oArma = arg(1)]
	[if(isNumber(oArma)): oArma = getArma(source,oArma)]
}]



[h: macro.return = json.get(oArma,"tipoArma")]