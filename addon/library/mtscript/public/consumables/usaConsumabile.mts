<!-- chiamando questa macro direttamente non viene terminata o interrotta l'azione -->
[h: source = json.get(macro.args,"source")]
[h: sItemName = json.get(macro.args,"spellName")]
[h: oUseParam = json.get(macro.args,"useParam")]
[h: sSpellMacro = json.get(macro.args, "spellMacro")]

[h: switchToken(source)]

[h: sTipoOggetto = json.get(oUseParam, "tipoOggetto")]

[h, if(json.contains(macro.args,"target")), code:{
	[h: target = json.get(macro.args,"target")]
};{
	[macro("powers/getFinalTarget@this"):json.append(source,sItemName)]
	[h: target = macro.return]
}]


[macro("powers/safetyCheckHostile@this"): json.append(source,target,sItemName,1)]
[h, if(macro.return != 0), code:{
	[broadcast("Uso oggetto Sospeso",getPlayerName())]
	[return(0,1)]
}]

[macro("consumables/checkItemAvailability@this"): json.append(source,sItemName,oUseParam)]
[h, if(!macro.return): return(0,1)]

[macro("consumables/getUseItemPrice@this"): json.append(source,sItemName, sTipoOggetto)]
[macro("consumables/pagaAzioneConsumabile@this"): json.append(macro.return, sTipoOggetto)]
[h, if(!macro.return): return (0,1)]



[h, macro("consumables/getItemAuto@this"): json.append(source,sItemName,oUseParam)]
[h: oOggetto = macro.return]

[macro("consumables/toxicHandler@this"): json.append(source,oOggetto)]
[bToxicRes = macro.return]
<!-- WIP, non ci si fa nulla per ora...  -->

[h, macro("consumables/checkSogliaPotere@this"): json.append(source, oOggetto)]
[h, if(macro.return), code:{
	[h: addSpellStartData(source,"itemUseParam",oUseParam)]
	[macro("powers/callSpellEffect@this"): json.set("","source",source,"target",target,"spellName",sItemName,"isOpport",0, "spellMacro", sSpellMacro)]
	[macro("powers/endOfCastUpdates@this"): json.set("","source",source,"spell",sItemName,"isOpport",0)]
};{
	[broadcast(strformat("<span title='%s'>%s: Fallimento Soglia Potere</span>",popMessaggio(source,"risultatoSogliaPotere"),getName(source)))]
}]

[macro("consumables/consumeItem@this"): json.append(source,sItemName,oUseParam)]
<!-- L'oggetto viene consumato al termine per avere la libertà di eliminarlo se esaurito senza perderne le info-->

[h: macro.return = 0]