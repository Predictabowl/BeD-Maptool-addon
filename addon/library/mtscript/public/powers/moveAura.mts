[h: source = json.get(macro.args,0)]
[h: sAuraId =json.get(macro.args,1)]
[h, if(json.length(macro.args) > 2): iMaxRange = json.get(macro.args,2); iMaxRange = ""]

[h:switchToken(source)]
[h: oAura = json.get(Aure_Attive,sAuraId)]
[h: sTipo = json.get(oAura,"tipoMov")]


[h, if(sTipo == "FOLLOW"), code:{
	[oOrigine = source]
	[macro("powers/setAuraOrigine@this"):json.append(source,sAuraId,oOrigine)]
}]

[h, if(sTipo == "MOVABLE"), code:{
	[iPortata = json.get(oAura,"portata")]
	[macro("powers/getBersaglio@this"):json.set("","source",source,"portata",iPortata)]
	[oOrigine = macro.return]
	[macro("powers/setAuraOrigine@this"):json.append(source,sAuraId,oOrigine)]
}]

[macro("powers/updateSingleAura@this"): json.append(source,sAuraId,iMaxRange)]
