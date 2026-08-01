[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: arma = json.get(macro.args,"arma")]
[h: bOpp = json.get(macro.args,"opportunita")]

[h, if(isNumber(bOpp) == 0 ): bOpp = 0]

[h, if(!isNumber(arma)), code:{
	[macro("combat/getArmaDaUsare@this"): source]
	[h: arma = macro.return]
}]
[h: LAA= getLAPos(source,target,bOpp,arma)]

[h: CFA= getCritProb(getCrit(source,arma))]
[h: DannoA= getDannoArma(source,arma)]

[h: iMoltiplicatore = getProperty("Moltiplicatore_Att",source)]

[h: iPCF = getPCrit(source,arma)]

[h: macro.return = json.set("","LA",LAA,"CF",CFA,"PCF",iPCF,"DannoArma",DannoA,"moltiplicatore",iMoltiplicatore)]

