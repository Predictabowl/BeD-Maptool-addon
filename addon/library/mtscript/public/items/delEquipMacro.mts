[h: args = arg(0)]
[h: oItem = json.get(args,0)]
[h: sNome = json.get(args,1)]

[h: oMacros = json.get(oItem,"on_EquipMacros")]
[h: oMacros = json.remove(oMacros,sNome)]
[h: oItem = json.set(oItem,"on_EquipMacros",oMacros)]

[h: macro.return = oItem]