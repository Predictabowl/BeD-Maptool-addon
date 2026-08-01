[h: oToken = json.get(macro.args,0)]
[h: sId = json.get(macro.args,1)]
[h, if(json.length(macro.args) > 3): oDatiCustom = json.get(macro.args,3); oDatiCustom = ""]

[h, if(json.type(oDatiCustom) != "OBJECT"): oDatiCustom = "{}"]
[h: oDatiCustom = json.set(oDatiCustom,"idDB",sId,"categoria","armatura")]

[h: switchToken(oToken)]
[h, if(json.type(Equipaggiamento) != "OBJECT"): Equipaggiamento = "{}"]

[macro("mobs/generateEquipId@this"): oToken]
[h: sLocalId = macro.return]

[h: Equipaggiamento = json.set(Equipaggiamento,sLocalId,oDatiCustom)]
[h: macro.return = sLocalId]