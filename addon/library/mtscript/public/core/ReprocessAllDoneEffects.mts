[h: target = macro.args]
[h: switchToken(target)]
[foreach(effetto,Lista_Effetti,"<br>"), code:{
	[h: param = json.append(target,effetto)]
	[macro("core/ReprocessDoneEffect@this"): param]
}]