[h: switchToken("MapVar")]

[h: returnList = ""]
[h, foreach(id,Lista_Aure), code:{
	[oToken = findToken(id)]
	[if(oToken == ""), code:{
		[macro("powers/delAuraSource@this"):id]
	};{
		[returnList = listAppend(returnList,id)]
	}]
}]
[h: macro.return = returnList]

