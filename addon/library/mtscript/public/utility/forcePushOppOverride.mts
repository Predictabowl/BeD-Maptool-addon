[h: source = json.get(macro.args,0)]
[h: target = json.get(macro.args,1)]

[h: flag = 1]
[h, if(source ==""): flag = 0]
[h, if(target ==""): flag = 0]
[h, if(flag == 1), code:{
	[switchToken("MapVar")]	
	[if(json.type(Opport_Override) != "OBJECT"): Opport_Override = "{}"]
	[Opport_Override = json.set(Opport_Override,source,target)]
}]

[h: macro.return = flag]