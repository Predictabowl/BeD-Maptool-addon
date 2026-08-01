[h: source = getImpersonated()]
[h: target = getSelected()]

[h: bCheck = input("sNome|Azione Generica|Nome Azione|TEXT","iTempo|0|Tempo Azione|TEXT"
	,"bOpp|No,Si|Fornisce opportunità?|LIST")]
[h, if(!bCheck): return(0,0)]
[h: iTempo = calcActionTime(eval(string(iTempo)),source)]
[h: param = json.set("","source",source,"target",target,"action",sNome,"time",iTempo,"opp",bOpp)]
[h, macro("mobs/IniziaAzione@this"):param]
[h: broadcast(strformat("%s inizia '%{sNome}'.%s",getName(source),popMessaggio(source,"iniziaAzioneMsg")))]
[h: macro.return = ""]