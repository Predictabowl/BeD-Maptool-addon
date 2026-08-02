[h: args = macro.args]
[h: oItem = json.get(args,0)]
[h: sNome = json.get(args,1)]
[h: sMacro = json.get(args,2)]
[h, if(json.length(args)>3): oParams = json.get(args,3); oParams = ""]

[h, if(sNome == ""): sNome = sMacro]

[h: oMacros = json.get(oItem,"on_EquipMacros")]
[h: oNewMacro = json.set("","nomeMacro",sMacro,"macroParam",oParams)]
[h: oMacros = json.set(oMacros,sNome,oNewMacro)]
[h: oItem = json.set(oItem,"on_EquipMacros",oMacros)]

[h: macro.return = oItem]