[h: oToken = arg(0)]
[h: sLabel = arg(1)]

[h: oJMem = getLibProperty("Json_Mem",oToken)]
[h, if(json.type(oJMem) != "OBJECT"): oJMem = "{}"]

[h: macro.return = json.get(oJMem,sLabel)]