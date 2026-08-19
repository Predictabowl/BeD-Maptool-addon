[h: target = getSelected()]


[h: inEle = "sElemento|ACQUA,ARIA,FUOCO,TERRA,ARCANO,MENTALE,NEGATIVO,POSITIVO|Elemento|LIST|value = string"]
[h: inNome = "sNome|Mario|Nome"]
[h: inLL = "iLL|-|LL"]
[h: inDmgLP = "sDmgLP|1d4|Danno per LP|TEXT"]
[h: inDmgBase = "sDmgBase|0|Danno base|TEXT"]
[h: bCheck = input(inNome,inEle,inLL,inDmgLP,inDmgBase)]
[h: assert(bCheck,"Abortito")]

[h: oParam = json.set("","elemento",sElemento,"dannoLP",sDmgLP,"dannoBase",sDmgBase,"nomeInc",sNome)]
[h, if(isNumber(iLL)): oParam = json.set(oPAram,"LL",iLL)]
[h: eventInstaller(target,"On_Hit","sNome","monsters/eventDannoElementale@" + getMacroLocation(), oParam)]