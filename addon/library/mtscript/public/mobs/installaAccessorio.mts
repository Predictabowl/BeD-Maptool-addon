[h: oToken = json.get(macro.args,0)]
[h: sNomeA = json.get(macro.args,1)]
[h: sCategoria = json.get(macro.args,2)]
[h, if(json.length(macro.args) > 3): oDatiCustom = json.get(macro.args,3); oDatiCustom = ""]

[h, if(json.type(oDatiCustom) != "OBJECT"): oDatiCustom = "{}"]
[h: oDatiCustom = json.set(oDatiCustom,"idDB",sNomeA,"categoria",sCategoria)]

[h: switchToken(oToken)]
[h, if(json.type(Equipaggiamento) != "OBJECT"): Equipaggiamento = "{}"]

[macro("mobs/generateEquipId@this"): oToken]
[h: sLocalId = macro.return]

[h: Equipaggiamento = json.set(Equipaggiamento,sLocalId,oDatiCustom)]
[h: macro.return = sLocalId]