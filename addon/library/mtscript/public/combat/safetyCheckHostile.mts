[h: source = json.get(macro.args,0)]
[h: target = json.get(macro.args,1)]


[h: target = findToken(target)]
[h, if(target ==""): bFlag = 1; bFlag = 0]

[h: bResult = 0]

[h, if(!bFlag), code:{
	[macro("utility/isHostile@this"): json.append(source,target)]
	[h: bHostile = macro.return]

	[h: bResult = !bHostile]

	[if(bResult), code:{
		[h: sMsg = strformat("sNoUse|ATTENZIONE: Stai cercando di attaccare %s||LABEL|Span=TRUE",getName(target))]
		[h: bCheck = input (sMsg)]
		[h: assert(bCheck == 1,"Operazione Annullata",0)]
	}]
}]

[h: macro.return = bResult]
