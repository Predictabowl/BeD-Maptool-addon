[h: oJson = arg(0)]
[h: sField = arg(1)]

[h: jArray = "[]"]
[h, foreach(key, oJson), code:{
	[oItem = json.get(oJson,key)]
	[oField = json.get(oItem,sField)]
	[oElement = json.set("",sField,oField,"idDB",key)]
	[jArray = json.append(jArray,oElement)]
}]

[h: jArray = json.sort(jArray,"A+",sField)]
[h: macro.return = jArray]
