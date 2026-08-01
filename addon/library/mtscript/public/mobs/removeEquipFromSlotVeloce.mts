[h: oToken = arg(0)]
[h: sId = arg(1)]

[h: switchToken(oToken)]
[h, if(json.type(Armi) != "ARRAY"): Armi = "[]"]

[h: iIndex = json.indexOf(Armi,sId)]
[h, if(iIndex >= 0): Armi = json.remove(Armi,iIndex)]