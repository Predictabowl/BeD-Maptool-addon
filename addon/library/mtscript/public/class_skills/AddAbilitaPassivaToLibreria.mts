[h: bCheck = input("sId||Id|TEXT","sNome||Nome|TEXT","sDescr||Descrizione|TEXT","sMacro|0,1|Macro|LIST")]

[h, if(!bCheck): return(0,0)]

[h: sLabel = "ABILITAPASSIVE"]
[h: oLibrary = getMacroLocation()]

[h: oAbPassive = getDaMemoria(oLibrary,sLabel)]
[h: oDati = json.set("","nomeDecorativo",sNome,"descrizione",sDescr,"installMacro",sMacro)]
[h: oAbPassive = json.set(oAbPassive,sId,oDati)]
[h: setInMemoria(oLibrary,sLabel,oAbPassive)]