[h: oItem = json.get(macro.args,"item")]
[h: oToken = json.get(macro.args,"token")]
[h: bRemove = json.get(macro.args,"remove")]
[h, if(!isNumber(bRemove)): bRemove = 0]
<!-- This is only for weapons, you need to know which weapon is hitting so it have to remember the equip hand-->
[h: iArma = json.get(macro.args,"numArma")] <!-- Equip hand -->
[h, if(!isNumber(iArma)): iArma = 1]
[h: idItem = json.get(macro.args,"idItem")]

[h: sItem = json.get(oItem,"nome")]

[h: oMacros = json.get(oItem,"on_EquipMacros")]
[h, foreach(sNome,oMacros), code:{
	[oMacro = json.get(oMacros,sNome)]
	[sMacro = json.get(oMacro,"nomeMacro")]
	[oParams = json.get(oMacro,"macroParam")]
	[oParams = json.set(oParams,"token",oToken,"remove",bRemove,"numArma",iArma,"IDMacro",sNome,"nomeOggetto",sItem,"idItem",idItem)]
	[macro(sMacro):oParams]
}]