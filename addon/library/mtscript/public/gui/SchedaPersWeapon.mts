[h: tokenId = arg(0)]
[h: iArma = arg(1)]

[h: switchToken(tokenId)]
[h, macro("mobs/getNomeArma@this"): json.append(tokenId, iArma)]
[h: sArma = macro.return]
[h, if(sArma == ""): return(0, "{}")]

[h: jsArma = json.set("", "id", iArma, "kind", "weapon", "name", sArma, "dmg", getDannoArma(tokenId, iArma))]
[h: dmgTypes = json.fromList(getProperty("Tipo_Danno_Arma" + iArma))]
[h: jsArma = json.set(jsArma, "dmgTypes", dmgTypes, "LA", getLA(tokenId, iArma), "pen", getPenetrazione(tokenId, iArma))]

[h: iCrit = getCrit(tokenId, iArma)]
[h: fCrit = round(getCritProb(iCrit)*100,1)]
[h: fPCrit = getPCrit(tokenId, iArma)+100]
[h: jsArma = json.set(jsArma, "crit", iCrit, "critProb", fCrit, "pcrit", fPcrit, "portata", getPortataArma(tokenId, iArma))]
[h, macro("combat/getCostoPA@this"):json.set("","source",tokenId,"arma", iArma)]
[h: jsArma = json.set(jsArma, "paAtt", macro.return, "laSpalle", getLASpalle(tokenId, iArma), "tempoAtt", getAttackTime(tokenId,0,iArma))]

[h: sCaA = getCarA(tokenId, getArma(tokenId, iArma))]
[h, if(sCaA == "CaP"): sCaA = "Mana"]
[h: jsArma = json.set(jsArma, "carA", sCaA)]

[r: jsArma]
[h: macro.return = jsArma]