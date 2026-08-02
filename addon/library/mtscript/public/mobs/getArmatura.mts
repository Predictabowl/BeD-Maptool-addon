[h: oToken = arg(0)]
[h: switchToken(oToken)]
[h, if(argCount() > 1): sArmatura = arg(1); sArmatura = Armatura]

[h, if(json.isEmpty(sArmatura)): return(0,"{}")]

[h: oLocal = json.get(Equipaggiamento,sArmatura)]
[h: sNomeInDB = json.get(oLocal,"idDB")]
[h, if(sNomeInDB == ""): return(0,"{}")]

[macro("items/getArmaturaFromDB@this"): sNomeInDB]
[h: oArmatura = json.merge(oLocal,macro.return)]
[h: oArmatura = json.set(oArmatura,"localId",sArmatura)]

[h: macro.return = oArmatura]