[h: oToken = arg(0)]

[h: switchToken(oToken)]

[h, if(Armatura == ""): return(0,0)]

[macro("mobs/getArmatura@this"): oToken]
[h: oArmatura = macro.return]

[h, if(json.isEmpty(oArmatura)): return(0,0)]

[macro("items/processaAttributi@this"): json.append(oToken,oArmatura,-1)]
[macro("mobs/applyAddArmaturaPenalties@this"): json.append(oToken,oArmatura,1)]
[h: Armatura = ""]
