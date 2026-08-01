[h: target = json.get(macro.args,0)]
[h: effetto = json.get(macro.args,1)]
[h: switchToken(target)]

[h: endstr = replace(effetto,"_"," ") + " svanisce da "+  token.name+".<br>"]

[h: subList = json.get(Lista_Effetti,effetto)]

[h: stato = json.get(subList,"stato")]
[h: params = json.get(subList,"params")]

[h, foreach(param,params,"<br>"), code:{
	[h: param = json.set("","target",target,"params",param)]
	[macro("core/RemoveEffectProp@this"): param]
}]

[h: Lista_Effetti = json.remove(Lista_Effetti,effetto)]

[h, if (stato != "null"), code:{
	[h: param = json.append(target,stato)]
	[macro("core/CheckStatusPersistance@this"):param]
	[h, if(macro.return==0), code:{
		[macro("popStato@Lib:MetodiVari"):listAppend(target,stato)]
	}]
}]

[h: macro.return = endstr]