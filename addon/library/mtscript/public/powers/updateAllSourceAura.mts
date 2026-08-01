[h: source = json.get(macro.args,0)]
[h: target = json.get(macro.args,1)]
[h, if(json.length(macro.args) > 2): iMaxRange = json.get(macro.args,2); iMaxRange = ""]

[h: switchToken(source)]

[h, foreach(sAura,Aure_Attive), code:{
	[oAura = json.get(Aure_Attive,sAura)]
	[sTipo = json.get(oAura,"tipoMov")]
	[if(sTipo == "FOLLOW" && source == target), code:{
		[macro("powers/moveAura@this"):json.append(source,sAura,iMaxRange)]
	};{
		[macro("powers/updateSTAura@this"):json.append(source,target,sAura)]
	}]
}]	


