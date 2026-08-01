[h: source = arg(0)]
[h: lDati = getProperty("Lista_Dati",source)]
[h: time = getStrProp(lDati,"Tempo_Mov")]
[h, if(time == ""): time = getMoveTime(source)]

[h: sMsg = getName(source)+" inizia un azione di movimento"]

[h: bDif = getOverride(source,"NoOpportunita")]
[h: bDif = getOverride(source,"Disimpegno") || bDif]
[h, if(!bDif), code:{
	[macro("mobs/getDifendersi@this"): source]
	[bDif = macro.return]
}]

[h, if(!bDif): bDif = isMovTattico(source)]

[h: setMessaggio(source,"iniziaAzioneMsg",sMsg)]

[h: param = json.set("","source",source,"target",source,"action","Movimento","color","Yellow","time",time,"opp",!bDif)]
[macro("mobs/IniziaAzione@this"):param]
[h: bFlag = macro.return]