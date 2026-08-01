[h: oToken = arg(0)]

[h: sTag = "BottoneCiclaVista"]
[h: bOn = getPreferenza(sTag,oToken,"Overlay")]

[h, if(bOn == ""): bOn = 0]

[h: bOn = math.mod(bOn+1,2)]
[h: setPreferenza(sTag,bOn,oToken,"Overlay")]