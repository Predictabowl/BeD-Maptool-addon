[h: source = arg(0)]

[h: switchToken("MapVar")]

[h, if(json.type(Opport_Override) != "OBJECT"): Opport_Override = "{}"]
[h: Opport_Override = json.remove(Opport_Override,source)]