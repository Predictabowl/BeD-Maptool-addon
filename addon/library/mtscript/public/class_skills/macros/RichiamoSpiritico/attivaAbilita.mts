[h: source = json.get(macro.args,0)]

[h: sNomeAb = "RichiamoSpiritico"]

[h: lSpiriti = json.toList(getArraySpiriti(source))]
[h: sSAttivo = getSpiritoAttivo(source)]
[h: iPos = max(listFind(lSpiriti,sSattivo),0)]
[h: bCheck = input (strformat("sSpirito|%s|Spirito|RADIO|Select=%{iPos} VALUE=STRING span=true",lSpiriti))]

[h: sMsg = "Attivazione Cancellata"]
[h, if(bCheck), code:{
	[macro("powers/rollRichiamoSpirito@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append(source,sSpirito)]
	[h: bResult = json.get(macro.return,0)]
	[h: sMsg = json.get(macro.return,1)]

	[h, if(bResult) , code:{
		[macro("powers/disattivaSpirito@lib:it.aldinucci.piero.bed.maptool.ruleset"):source]
		[macro("powers/attivaSpirito@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.append(source,sSpirito)]
		[macro("gui/updatePoteri@lib:it.aldinucci.piero.bed.maptool.ruleset"): ""]
	}]
}]
	
[h: appendMessaggio(source,"strAbilitaAttivata",sMsg)]
[h: macro.return = !bCheck]