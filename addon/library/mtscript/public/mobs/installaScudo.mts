[h: oToken = json.get(macro.args,0)]
[h: sId = json.get(macro.args,1)]
[h, if(json.length(macro.args) > 2): oDatiCustom = arg(2); oDatiCustom = ""]

[h, if(json.type(oDatiCustom) != "OBJECT"): oDatiCustom = "{}"]
[h: oDatiCustom = json.set(oDatiCustom,"idDB",sId,"categoria","scudo")]

[h: switchToken(oToken)]
[h, if(json.type(Equipaggiamento) != "OBJECT"): Equipaggiamento = "{}"]

[macro("mobs/generateEquipId@this"): oToken]
[h: sLocalId = macro.return]

[h: Equipaggiamento = json.set(Equipaggiamento,sLocalId,oDatiCustom)]
[h: macro.return = sLocalId]