[h: target = json.get(macro.args,"target")]
[h: remove = json.get(macro.args,"remove")]
[h: macroCalled = json.get(macro.args,"macroCalled")]
[h: oParam = json.get(macro.args,"parametri")]


[h: msg = ""]
[h, if(macroCalled != 1 && remove != 1), code:{
	[h: sEffetto = json.get(oParam,"effetto")]
	[h: iMolt = json.get(oParam,"moltiplicatore")]

	[macro("powers/getParamStatoBase@this"): json.set("","target",target,"effetto",sEffetto,"moltiplicatore",iMolt)]
	[h: oEffetto = json.set(macro.return,"verbose",0)]
	[macro("utility/popMessaggio@this"):json.set("","token",target,"key","msgEffetto")]
	[h: msg = macro.return]
	[macro("core/ApplyEffect@this"): oEffetto]
	[macro("utility/popMessaggio@this"):json.set("","token",target,"key","msgEffetto")]
	[msg= msg + macro.return]
}]

[h: macro.return = msg]