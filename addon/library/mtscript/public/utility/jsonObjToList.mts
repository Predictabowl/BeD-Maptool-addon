[h: oJson = macro.args]

[h: return = ""]
[h, foreach(item,oJson), code:{
	[return = listAppend(return,item)]
}]

[h: macro.return = return]