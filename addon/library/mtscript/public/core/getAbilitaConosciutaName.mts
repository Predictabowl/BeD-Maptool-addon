<!-- Ricava il nome di un abilita conosciuta da un Token - DEPRECATED -->
[h: oToken = json.get(macro.args,0)]
[h: sAbilita = json.get(macro.args,1)]

[h: sResult = ""]

[macro("core/getAbilitaClasse@this"): macro.args]
[h: oAbilita = macro.return]
[h, if(!json.isEmpty(oAbilita)), code:{
	[h: sClasse = json.get(oAbilita,"Classe")]
	[macro("getFluffName@"+sClasse):sAbilita]
	[sResult = macro.return]
}]

[h: macro.return = sResult]

