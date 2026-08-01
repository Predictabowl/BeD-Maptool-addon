[h: target = macro.args]
[h: list = getProperty("Lista_Effetti",target)]
[r, foreach (i,list,"<br>"), code:{
	[h: parameters = json.append(target,i)]
	[macro("core/RemoveEffect@this"): parameters]
}]