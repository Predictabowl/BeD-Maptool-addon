[h: source = json.get(macro.args,"source")]

[h, if(source ==""): source = getImpersonated()]
[h: switchToken(source)]

[h: payAction(json.set("", "token", source,"MM", 4))]

[h, if(!macro.return): return(0,1)]

[macro("mobs/rollCapacita@this"): json.append(source,"Furtivita")]
[h: iHide = macro.return]

[h: msgOutput = ""]

[h: lTokens = json.get(getInitiativeList(),"tokens")]
[h, foreach(jToken, lTokens), code:{
	[oToken = json.get(jToken,"tokenId")]
	[if (isHostile(source, oToken)), code:{
		[h: jSight = canSeeToken(source, oToken)]
		[iMod = 10]
		[if(!json.contains(jSight,"CENTER")): iMod = 10]
		[if(json.isEmpty(jSight)): iMod = 0]
		[pushStatModifier(oToken, "Percezione", iMod)]
		[macro("mobs/rollCapacita@this"): json.append(oToken, "Percezione")]
		[h: iLook = macro.return]
		[if(iLook >= iHide): appendMessaggio(source,"endOfActionMsg",strformat("%s fallisce il suo tentativo di nascondersi.",getName(source)))]
		[if(iLook >= iHide): return (0,0)]
	}]
}]

[h: jTemp = json.set("", "tipo", "onceMod", "key", "MM_Max", "value", -4, "Moltiplicabile", 0)]
[h: aModifiers = json.append("", jTemp)]
[h: oEffetto = json.set("", "source", source, "target", source, "effetto", "Nascosto", "stato", "Nascosto", "durata", -1, "tipo", "NASCOSTO","params", aModifiers)]
[macro("core/ApplyEffect@this"): oEffetto]

[h: appendMessaggio(source,"endOfActionMsg",strformat("%s entra in modalità furtiva.",getName(source)))]
[h: macro.return = 0]