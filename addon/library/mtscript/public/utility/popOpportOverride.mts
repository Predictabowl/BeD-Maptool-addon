[h: source = arg(0)]
[h: target = arg(1)]

[h: switchToken("MapVar")]

[h, if(json.type(Opport_Override) != "OBJECT"): Opport_Override = "{}"]
[h: opportTarget = json.get(Opport_Override,source)]
[h: Opport_Override = json.remove(Opport_Override,source)]
[h, if(opportTarget == "ALL" || opportTarget == target): return(0,1)]
[h: macro.return = 0]