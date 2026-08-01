[h, if(argCount()>1), code:{
	[source = arg(0)]
	[spellName = arg(1)]
	[if(argCount()>2): critRes = arg(2); critRes = ""]
	[if(argCount()>3): arma = arg(3); arma = ""]
	[iLM = ""]
	[sElemento = ""]
};{
	[h: macro.args = arg(0)]
	[h: source = json.get(macro.args,"source")]
	[h: iLM = json.get(macro.args,"LM")] <!-- Opzionale se spellName -->
	[h: sElemento = upper(json.get(macro.args,"element"))] <!-- Opzionale se spellName -->
	[h: arma = json.get(macro.args,"arma")] <!-- Opzionale -->
	[h: critRes = json.get(macro.args,"critRes")] <!-- Opzionale -->
	[h: spellName = json.get(macro.args,"spellName")] <!-- Opzionale -->
}]

[h, if(isItemInCast(source,spellName)), code:{
	[macro("getAutoCDOggetto@Lib:OggettiUsabili"): json.append(source,spellName)]
	[return(0, macro.return)]
}]

[h: switchToken(source)]
[h, if(!isNumber(iLM)), code:{
	[if(spellName!=""): iLM = getLMM(json.set("","source",source,"spell",spellName));iLM = 0]
}]

[h, if(sElemento ==""), code:{
	[if(spellName!=""):	sElemento = upper(getSpellElement(source,spellName))]
}]

[h, if(isNumber(arma) == 0), code:{
	[macro("combat/getArmaDaUsare@this"):source]
	[h: arma = macro.return]
}]

[h, if (critRes == ""), code:{
	[macro("combat/getUltimoCritico@this"): source]
	[critRes = macro.return]
}]


[h, if(spellName != ""), code:{
	[macro("powers/getSpellMod@this"): json.append(source,spellName,"CD")]
	[iSpellMod = json.get(macro.return,"mod")]
};{
	[iSpellMod = 0]
}]

[h: oArma = getArma(source,arma)]
[h: iACD = getArmaStat(oArma,"CD") + getArmaStat(oArma,"potenziamento")]
[h: CDValue = 14 + iLM + CD_Base + floor(Livello/5) + iACD]

[h, if(critRes == 1), code:{
	[iPcrit = getPCrit(source)]
	[CDValue = CDValue + roundRoll(iPcrit/15)]
}]

[h: CDValue = CDValue + getStatModifier(source,"CD") + iSpellMod]

[h: macro.return = CDValue]