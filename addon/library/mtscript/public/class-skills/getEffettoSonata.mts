[h: oToken = findToken(arg(0))]
[h, if(argCount() > 1): iMolt = arg(1); iMolt = 1]

[h, macro("class-skills/getMotivoAttivo@this"): oToken]
[h: sMotivo = macro.return]
[h, if(sMotivo == ""), code:{
	[macro("class-skills/chooseEffettoSonata@this"): oToken]
	[h: sMotivo = macro.return]
}]

[h, if(isNumber(sMotivo)): return(0,"[]")]

[macro("class-skills/getAllMotivi@this"): 0]
[h: jMotivi = macro.return]

[h: oMotivo = json.get(jMotivi, sMotivo)]
[h: iVal = json.get(oMotivo,0) * iMolt]
[h: sEffetto = json.get(oMotivo,1)]
[h: aMotivo = json.append(sMotivo,iVal,sEffetto)]

[h: macro.return = aMotivo]