[h: oToken = findToken(arg(0))]

[h, if(oToken == ""): oToken = getImpersonated()]

[h, macro("class-skills/getMotiviConosciuti@this"): oToken]
[h: aMotiviConosciuti = macro.return]

[h, macro("class-skills/getAllMotivi@this"): 0]
[h: jMotivi = macro.return]

[h: sInputList = ""]
[h: aMotivi = "[]"]
[h, foreach(sMotivo, aMotiviConosciuti), code:{
	[if(json.contains(jMotivi, sMotivo)), code:{
		[oMotivo = json.get(jMotivi, sMotivo)]
		[iVal = json.get(oMotivo,0)]
		[sEffetto = json.get(oMotivo,1)]
		[aMotivi = json.append(aMotivi, sMotivo)]
		[sInputList = listAppend(sInputList,strformat("%{sMotivo}: %+d %s",iVal,sEffetto))]
	}]
}]
[h: sInputRadio = strFormat("indexMotivo|%{sInputList}|Scegli Motivo|RADIO|SPAN=TRUE")]
[macro("class-skills/getMotivoAttivo@this"): oToken]
[h, if(macro.return == ""), code: {
	[h: bCheck = input(sInputRadio)]
	[h: bReset = 0]
};{
	[h: bCheck = input("junkVar|"+macro.return+"|Attivo|LABEL",
	"bReset|0|Disabilita|CHECK", sInputRadio)]
}]
[h, if(!bCheck): return(0,0)]
[h, if(bReset): return(0,-1)]

[h: macro.return = json.get(aMotivi,indexMotivo)]
