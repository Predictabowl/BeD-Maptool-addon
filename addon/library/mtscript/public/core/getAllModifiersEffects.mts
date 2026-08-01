[h: target = macro.args]

[h: switchToken(target)]
[h: oMod = "{}"]

[h, foreach(oEffetto,Lista_Effetti), code:{
	[h: oEffetto = json.get(Lista_Effetti,oEffetto)]
	[h: params = json.get(oEffetto,"params")]
	[h, if(json.isEmpty(params) == 1), code:{
		[len = 0]
	};{
		[h: len = json.length(params)]
	}]
	[h, for(i,0,len,1,""), code:{
		[param = json.get(params,i)]
		[macro("core/addModifierEffect@this"): json.append("",param,oMod)]
		[oMod = macro.return]
	}]
}]

[h: macro.return = oMod]
