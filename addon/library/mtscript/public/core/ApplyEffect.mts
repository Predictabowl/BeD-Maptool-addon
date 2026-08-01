[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: effetto = json.get(macro.args,"effetto")]
[h: stato = json.get(macro.args,"stato")]
[h, if (stato == ""): stato = "null"]
[h: iDurata = json.get(macro.args,"durata")]
[h, if(iDurata==""): iDurata = 0]
[h: subitoAtt = json.get(macro.args,"subito")]
[h, if (subitoAtt == ""): subitoAtt = 1]
[h: potenza = json.get(macro.args,"potenza")]
[h: iMoltip = json.get(macro.args,"moltiplicatore")]
[h: tipo = upper(json.get(macro.args,"tipo"))]
[h: mutex = json.get(macro.args,"mutex")]
[h: params = json.get(macro.args,"params")]
[h: verbose = json.get(macro.args,"verbose")]
[h: bMsg = json.get(macro.args,"messaggi")]
[h: oInfo = json.get(macro.args,"otherInfo")]
[h: oCategoria = json.get(macro.args,"categoria")]
[h: iRR = json.get(macro.args,"RR")]

[h, if(!isNumber(iMoltip)): iMoltip = 1]
[h, if(oCategoria == ""), code:{
	[oCategoria = tipo]
	[macro.args = json.set(macro.args,"categoria",oCategoria)]
}]

[h, if(json.type(oInfo) != "OBJECT"): oInfo = "{}"]

[h: mutex = json.fromList(mutex)]

[h: switchToken(target)]

<!-- Rimozione di effetto in conflitto -->
[h, macro("core/RemoveEffect@this"): json.append("",target,effetto)]
[h, macro("core/removeConflictEffects@this"): json.append(target,mutex, iDurata, iMoltip)]
[h, if(macro.return == 0), code: {
	[appendMessaggio(target,"msgApplicaEffetto","L'effetto non viene applicato perché un'altro più potente è gia presente sul bersaglio")]
	[return(0,0)]
}]

<!-- Eventi On_Effect_Received, gli effetti nascosti non devono essere processati -->
[h: msgEvent = ""]
[h, if(tipo != "NASCOSTO"), code:{
	[h: oEventParam = json.set("","effetto",macro.args)]
	[macro("events/runEvents@this"): json.set("","source",target,"event","On_Effect_Received","eventParam",oEventParam)]
	[macro("utility/popMessaggio@this"): json.set("","token",target,"key","msgEventOn_Effect_Received")]
	[h: msgEvent = msgEvent + macro.return]
	[h, if(msgEvent != ""): msgEvent = msgEvent+"<br>"]
}]


[h: bImmune = isImmune(target, oCategoria)]

[h, if(bImmune), code:{
	[msgOut = strformat("%s &egrave; immune a questo effetto",getName(target))]
	[macro("utility/setMessaggio@this"):json.set("","token",target,"key","msgEffetto","msg",msgOut)]
	[return (0,0)]
}]


<!-- Inizio creazione Effetto -->
[h: subList = json.set("","stato",stato,"source",source)]
[h: subList = json.set(subList,"durata",iDurata)]
[h: subList = json.set(subList,"inizioRound",subitoAtt, "RR", iRR)]
[h: subList = json.set(subList,"potenza",potenza,"moltiplicatore",iMoltip)]
[h: subList = json.set(subList,"tipo",tipo,"categoria",oCategoria)]
[h, if (mutex !=""): subList=json.set(subList,"mutex",mutex)]
[h: subList=json.set(subList,"otherInfo",oInfo)]
<!-- è importante inserire un flag per sapere se è la prima applicazione o se l'effetto viene applicato come
 conseguenza di altri effetti durante la fese di update ad inizio e termine round -->
[macro("utility/isRoundUpdating@this"):0]
[h: subList = json.set(subList,"params",params,"roundUpdating",macro.return)]

[h: Lista_Effetti = json.set(Lista_Effetti,effetto,subList)] 

[h, if (stato != "null"), code:{
	[macro("utility/pushStato@this"):listAppend(target,stato)]
}]


[h, if(subitoAtt != 0), code: {
	[h: token.name] 
	[h: param = json.append(target,effetto)]
	[macro("core/ProcessEffect@this"): param]
}]

[sBaseMsg = ""]
[h, if(stato !="null"), code:{
	[h: im = getStateImage(stato)]
	[h: sBaseMsg = strformat("<img src='%{im}' width='25' height='25' />&nbsp;")]
}]
[h: sBaseMsg = sBaseMsg + replace(effetto,"_"," ")]
[h, if(verbose!=0): broadcast(getName(target)+": "+sBaseMsg)]
[h, if(bMsg == 0): sBaseMsg = ""]
[sOutMsg = strformat("%{msgEvent}%{sBaseMsg}")]


[h: appendMessaggio(target,"msgApplicaEffetto",sOutMsg)]