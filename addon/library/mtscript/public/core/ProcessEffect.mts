[h: target = json.get(macro.args,0)]
[h: effetto = json.get(macro.args,1)]
[h: switchToken(target)]
[h: subList = json.get(Lista_Effetti,effetto)]
[h: params = json.get(subList,"params")]
[h: source = json.get(subList,"source")]

[h, if(json.isEmpty(params) == 1), code:{
	[len = 0]
};{
	[h: len = json.length(params)]
}]

[h: oOtherInfo = json.get(subList, "otherInfo")]

[macro("core/getEffectMolt@this"):json.append(target,effetto)]
[h: iMolt = macro.return]

[r, for(i,0,len,1,""), code:{
	[h: param = json.get(params,i)]
	[h: argomenti = json.set("","target",target,"source",source,"params",param,"effetto",effetto,"moltiplicatore",iMolt, "otherInfo", oOtherInfo)]
	[macro("core/ProcessEffectProp@this"): argomenti]
	[h: param = macro.return]
	[h: params = json.set(params,i,param)]
}]
<!-- Rileggo la sublist, nel caso fosse stata modificata da qualche macro, in modo da mantenere le modifiche
Rischioso ma versatile -->
[h: subList = json.get(Lista_Effetti,effetto)]
[h: subList = json.set(subList,"params",params)]
[h: Lista_Effetti = json.set(Lista_Effetti,effetto,subList)]
