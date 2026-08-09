[h: target = json.get(macro.args,"target")]

[h: lista = getProperty("Lista_Effetti",target)]
[h: effetto = fetchSpellProp("CodaViverna","nome_decorativo")]

[r, if (json.contains(lista,effetto)),code:{
	[h: effetto = json.get(lista,effetto)]
	[h: effect_param = json.get(effetto,"params")]
	[h: macro_param = json.get(effect_param,0)]
	[h: macro_param = json.get(macro_param,"parametri")]
	[h: stack = json.get(macro_param,"stack")]
	[h: stack = stack +1]
};{
	[h:stack = 1]
}]
[h: macro.return = stack]