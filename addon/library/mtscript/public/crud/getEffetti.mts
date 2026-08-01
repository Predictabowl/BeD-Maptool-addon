[h: oToken = arg(0)]

[h: oLEffetti = getProperty("Lista_Effetti",oToken)]
[h, if(json.type(oLEffetti)!= "OBJECT"): oLEffetti = "{}"]

[h: macro.return = oLEffetti]