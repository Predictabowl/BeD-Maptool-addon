<!-- TODO review this function -->
[h: oToken = json.get(macro.args,0)]
[h: sRuna = json.get(macro.args,1)]


[h: inLiv = "iLiv|1|Livello Runa"]
[h: inCariche = "iCariche|0|Numero cariche"]
[h: inMaxCariche = "iMaxCariche|0|Numero Max cariche"]
[h: inArma = strformat("sArma|1,2|Arma su cui installare|LIST|value=string")]
[h: inSlot = "iSlot|1,2,3|Slot Runa|LIST"]
[h: bCheck = input(inLiv,inCariche,inMaxCariche,inArma,inSlot)]
[h: assert(bCheck,"Abortito")]
[h, if(iCariche == 0): iCariche = fetchConsumableProp(sRuna,"cariche_base")]
[h, if(iMaxCariche <= 0): iMaxCariche = iCariche]

[h: iSlot = iSlot +1]
[h:oOggetto = json.set("","libName",sRuna,"livello",iLiv,"tipo","RUNA","cariche",iCariche,"maxCariche",iMaxCariche)]
[h: setRunaToArma(oToken,sArma,oOggetto,iSlot)]



