[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: bOpp = json.get(macro.args,"opportunita")]

[macro("core/popStatModifier@this"): json.append(target,"rerollParare")]
[h: iTentativi = 1 + macro.return]
[h: dado = 0]
[h: sResultList = ""]
[h,for (i,0,iTentativi), code:{
	[dado2 = 1d1000]
	[sResultList = listAppend(sResultList,dado2)]
	[if(dado2 > dado): dado = dado2]
}]

[h: iParare = getParare(target)]
[h: iPossanza = getPossanza(source)]

[h: iMod = getParareProb(iParare-iPossanza)*1000]

[macro("combat/getModDifesaPos@this"): json.append(source,target,bOpp)]
[h: percMod = macro.return]
[h: iMod = (percMod * iMod)]
[h: result = dado + iMod]


[h, if(getOverride(target, "failParare") > 0): result = 0]
[h, if(getOverride(source, "attaccoEnergetico") > 0): result = 0]
[h, if(getOverride(source, "attaccoPotenziale") > 0): result = 0]

[h, if(result<1000), code:{
	[result = 0]
};{
	[result = 1]
	[macro("events/runEvents@this"): json.set("","event","On_Block","source",target,"target",source)]
}]

[h: macro.return = json.set("","result",result,"dado",dado,"mod",iMod,"ogniTiro",sResultList)]