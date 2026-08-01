[h: target = macro.args]

[h: lEffetti = getProperty("Lista_Effetti",target)]
[foreach(effetto,lEffetti,"<br>"), code:{
	[h: param = json.append(target,effetto)]
	[macro("core/ProcessEffect@this"): param]
}]