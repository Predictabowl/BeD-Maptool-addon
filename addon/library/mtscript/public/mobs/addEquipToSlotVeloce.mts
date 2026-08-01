[h: oToken = arg(0)]
[h: sId = arg(1)]

[h: switchToken(oToken)]
[h, if(json.type(Armi) != "ARRAY"): Armi = "[]"]

[h, if(!json.contains(Armi,sId)): Armi = json.append(Armi,sId)]