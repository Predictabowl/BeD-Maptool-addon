[h: target = json.get(macro.args,"target")]

[h: switchToken(target)]

[h, foreach(sItem,Mantenimenti), code:{
	[if(!json.contains(macro.args, sItem)), code:{
		[macro("powers/delMantenimento@this"): json.append(target,sItem)]		
	}]
}]

[h: closeDialog("Mantenimento Poteri")]