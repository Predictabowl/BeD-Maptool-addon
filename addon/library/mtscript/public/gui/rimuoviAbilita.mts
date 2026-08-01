[h: target = json.get(macro.args,0)]

[h: bCheck = input("bRemove|No,Si|Stai cancellando permanentemente un'abilita, sei sicuro?|LIST")]
[h, if(bCheck), code:{
	[if(bRemove == 1), code:{
		[macro("core/delAbilitaClasse@this"):macro.args]
		[macro("gui/dialogNascondiAbilita@this"): target]
	}]
}]