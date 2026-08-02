[h, macro("items/getListaArmi@this"):0]
[h: oArmi = macro.return]
[h: lArmi = ""]
[h, foreach(item,oArmi), code:{
	[lArmi = listAppend(lArmi,json.get(item,"nome"))]
}]

[h: bCheck = input("iArma|"+lArmi+"|Arma|LIST")]

[h, if(!bCheck): return (0,0)]

[h: oItem = json.get(oArmi,iArma)]
[h: sId = json.get(oItem,"idDB")]

[h: macro.return = sId]

