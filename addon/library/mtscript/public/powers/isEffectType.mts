[h: target = json.get(macro.args,0)]
[h: type = json.get(macro.args,1)]
[h: list = getProperty("Lista_Effetti",target)]
[h: result = 0]
[h, foreach(effect,list,"<br>"), code:{
	[tipo = json.get(list,effect)]
	[tipo = json.get(tipo,"tipo")]
	[if (startsWith(tipo,type) == 1): result = 1]
	
}]
[h: macro.return = result]