[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: arma = json.get(macro.args,"arma")]
[h: bOpp =  json.get(macro.args,"opportunita")]
[h: combatParam =  json.get(macro.args,"combatParam")]

<!-- Combat Param contiene: LA, CF, PCF, DannoArma, moltiplicatore, tipoDanno, mancare, nomeArma (opzionale) -->

[h, if (arma ==""): arma = getArmaDaUsare(source)]
[h, if(isNumber(bOpp) == 0): bOpp = 0]
[h, if(json.type(combatParam) != "OBJECT"): combatParam = "{}"]


[h: switchToken(source)]

[h: startMsg = ""]

[h, if(bOpp == 1), code:{
	[h: startMsg = startMsg+"Attacco di Opportunit&agrave; "]
	[bSpalle = 1]
};{
	[bSpalle = isAlleSpalle(source,target,bOpp)]
}]

[h, if(bOpp != 1 && bSpalle == "spalle"): startMsg = startMsg+"Attacco alle spalle "]


[macro("utility/appendMessaggio@this"):json.set("","token",source,"key","strPotere","msg",startMsg)]


[macro("getUltimaDifesa@Lib:Combattimento"): source]
[difesa = macro.return]

[macro("getPhysDmg@Lib:Combattimento"):json.set(combatParam,"source",source,"target",target,"arma",arma,"opportunita",bOpp)]
[iDanno = macro.return]


[macro("utility/popMessaggio@this"): json.set("","token",source,"key","dannoArma")]
[macro("utility/appendMessaggio@this"):json.set("","token",source,"key","strPotere","msg",macro.return)]

[h: param = json.set("","source",source,"target",target,"danno",iDanno,"difesa",difesa)]
[macro("DanniDifesaFisica@Lib:Combattimento"): param]
[h: iDanno = macro.return]

[macro("core/DannoTarget@this"): json.set("","target",target,"valore",iDanno,"source",source,"verbose",0)]

[h, if(bOpp == 1), code:{
	[macro("addOpportunitaUsed@Lib:TokenMacros"): json.append(source,target)]
}]

[h: macro.return = json.set("","danno",iDanno)]
