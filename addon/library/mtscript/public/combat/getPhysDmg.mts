[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: iArma = json.get(macro.args,"arma")]
[h: critRes = json.get(macro.args,"critRes")]
[h: LAA= json.get(macro.args,"LA")]
[h: DannoA= json.get(macro.args,"DannoArma")]
[h: iMoltiplicatore = json.get(macro.args,"moltiplicatore")]
[h: bOpp = json.get(macro.args,"opportunita")]
[h: sNomeArma = json.get(macro.args,"nomeArma")]
[h: lDmgType = json.get(macro.args,"tipoDanno")]

[h, if(!isNumber(bOpp)): bOpp = 0]
[h, if(!isNumber(critRes)): critRes = getUltimoCritico(source)]
[h, if(!isNumber(iArma)): iArma = getArmaDaUsare(source)]
[h, if(!isNumber(LAA)): LAA= getLAPos(source,target,bOpp,iArma)]
[h, if(DannoA == ""): DannoA= getDannoArma(source,iArma)]
[h, if(!isNumber(iMoltiplicatore)): iMoltiplicatore = getProperty("Moltiplicatore_Att",source)]
[h, if(sNomeArma == ""), code:{
	[macro("mobs/getNomeArma@this"): json.append(source,iArma)]
	[sNomeArma = macro.return]
}]
[h, if(lDmgType == ""): lDmgType = getTipoDannoArma(source, iArma)]


[h: switchToken(source)]
[h: msgOutput = ""]
[h: LDT = getLDPos(source,target,bOpp, lDmgType)]

[h: dado = eval(DannoA)]

[h: iDiff = LAA - LDT]
[h, if(iDiff < 0), code:{
	[h: iDiff = min(iDiff + getPenetrazione(source, iArma), 0)]
}]

[h: bonus = iDiff * iMoltiplicatore]


[h: iDannoFinale = dado+bonus]
[h, if(critRes == 1): iDannoFinale = iDannoFinale*(1+getPCrit(source,iArma)/100)]
[h: iDannoFinale = roundRoll(iDannoFinale * getModDmgPerc(source,target))]


[h, if (iDannoFinale <1): iDannoFinale =1]
[h: bonus = MV.trunc(bonus)]


[h, if(isNPC(target)), code:{
	[macro("combat/discoverTargetLDSheet@this"): json.append(target, lDmgType)]
}]


[h: sMessage = strformat("%{sNomeArma} [<span title = '%{dado}'>%{dannoA}</span>]%+d= %d",bonus,bonus+dado)]
[macro("core/verbosePrint@this"):sMessage]
[h: msgOutput = msgOutput+macro.return]

[macro("utility/setMessaggio@this"):json.set("","token",source,"key","dannoArma","msg",msgOutput)]
[h: macro.return = iDannoFinale]


