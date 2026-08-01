[h: oToken = arg(0)]
[h: sLabel = arg(1)]
[h: oObject = arg(2)]

[h: oJMem = getLibProperty("Json_Mem",oToken)]
[h, if(json.type(oJMem) != "OBJECT"): oJMem = "{}"]

[h: oJMem = json.set(oJMem,sLabel,oObject)]
[h: setLibProperty("Json_Mem",oJMem,oToken)]