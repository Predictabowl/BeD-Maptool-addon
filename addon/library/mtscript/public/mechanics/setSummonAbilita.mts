[h: sToken = arg(0)]

[h: iLiv = getProperty("Livello", sToken)]
[h, macro("mechanics/getSummonTableByLevel@this"): json.append(sToken, iLiv, "summon-abilita-table")]
[h: aAbilita = macro.return]
[h, if(json.isEmpty(aAbilita)): return(0, "")]
[macro("class-skills/removeAllAbilitaClasse@this"): sToken]
[h, foreach(oAbilita, aAbilita), code:{
	[oPotLiv = json.get(oAbilita, "livello")]
	[iCounter = 0]
	[iAbLiv = json.get(oPotLiv, iCounter)]
	[while(iAbLiv <= iLiv && iCounter < json.length(oPotLiv)), code:{
		[iAbLiv = json.get(oPotLiv, iCounter)]
		[iCounter = iCounter +1]
	}]
	[sAbilita = json.get(oAbilita, "nomeAbilita")]
	[macro("class-skills/teachAbilitaClasse@this"):json.append(sToken,sAbilita,iCounter)]
}]
