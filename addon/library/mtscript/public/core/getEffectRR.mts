[h: oToken = arg(0)]
[h: oEffetto = arg(1)]


[h: iRR = json.get(oEffetto, "RR")]
[h, if(isNumber(iRR)): return(0, iRR)]

[h: jOtherInfo = json.get(oEffetto, "otherInfo")]
[h: sParent = json.get(jOtherInfo, "parentEffect")]
[h: jParent = getEffetto(oToken, sParent)]
[h: iRR = json.get(jParent, "RR")]
[h, if(!isNumber(iRR)), code:{
	[broadcast(strformat("(%s) Impossibile trovare il RR dell'effetto %{oEffetto}", getName(oToken)), "gm")]
	[return(0,0)]
}]
[h: macro.return = iRR]