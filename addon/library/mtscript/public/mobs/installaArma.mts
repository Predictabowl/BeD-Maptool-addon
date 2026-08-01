[h: oToken = arg(0)]
[h: sId = arg(1)]
[h, if(argCount() > 2): oDatiCustom = arg(2); oDatiCustom = ""]

[h, if(json.type(oDatiCustom) != "OBJECT"): oDatiCustom = "{}"]
[h: oDatiCustom = json.set(oDatiCustom,"idDB",sId,"categoria","arma")]

[h: switchToken(oToken)]
[h, if(json.type(Equipaggiamento) != "OBJECT"): Equipaggiamento = "{}"]

[macro("mobs/generateEquipId@this"): oToken]
[h: sLocalId = macro.return]

[h: Equipaggiamento = json.set(Equipaggiamento,sLocalId,oDatiCustom)]
[macro("processEffectInstallers@Lib:EquipEffect"): json.append(oToken,sLocalId,"initialize")]
[h: macro.return = sLocalId]