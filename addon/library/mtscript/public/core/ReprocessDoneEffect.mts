[h: target = json.get(macro.args,0)]
[h: effetto = json.get(macro.args,1)]
[h: switchToken(target)]
[h: subList = json.get(Lista_Effetti,effetto)]
[h: params = json.get(subList,"params")]

[h, if(json.isEmpty(params) == 1), code:{
	[len = 0]
};{
	[h: len = json.length(params)]
}]

[macro("core/getEffectMolt@this"):json.append(target,effetto)]
[h: iMolt = macro.return]

[h, for(i,0,len,1,""), code:{
	[param = json.get(params,i)]
	[tipo =json.get(param,"tipo")]
	[if(tipo=="doneMod"), code:{
		[macro("core/onceModCode@this"): json.append(target,param,iMolt)]
	}]
}]