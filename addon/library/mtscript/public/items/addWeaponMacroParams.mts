[h: oToken = json.get(macro.args,0)]
[h: sArma = json.get(macro.args,1)]
[h: sNome = json.get(macro.args,2)]
[h: oParams = json.get(macro.args,3)]
		
[macro("mobs/getArma@this"):json.append("",oToken,sArma)]
[oArma = macro.return]

[h: oMacros = json.get(oArma,"on_EquipMacros")]
[h: oMacro = json.get(oMacros,sNome)]
[h: oOldParams = json.get(oMacro,"macroParam")]
[h, if(json.type(oOldParams) == "OBJECT"), code:{
	[oParams = json.merge(oOldParams,oParams)]
}]

[h: oMacro = json.set(oMacro,"macroParam",oParams)]
[h: oMacros = json.set(oMacros,sNome,oMacro)]
[h: oArma = json.set(oArma,"on_EquipMacros",oMacros)]

[macro("mobs/setArma@this"): json.append(oToken,sArma,oArma)]