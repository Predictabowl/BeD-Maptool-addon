[h: broadcast(strformat("DEPRECATED: %s@%s",getMacroName(),getMacroLocation()))]

[h: oToken = json.get(macro.args,0)]
[h: sArma = json.get(macro.args,1)]
[h: sMacro = json.get(macro.args,2)]

[macro("mobs/getArma@this"): json.append(oToken,sArma)]
[h: oArma = json.remove(macro.return,"equipParam")]
[h: oArma = json.set(oArma,"on_EquipMacro",sMacro)]
[macro("mobs/setArma@this"): json.append(oToken,sArma,oArma)]