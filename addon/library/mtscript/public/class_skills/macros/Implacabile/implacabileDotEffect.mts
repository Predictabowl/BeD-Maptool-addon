[h: target = json.get(macro.args,"target")]
[h: bRemove = json.get(macro.args,"remove")]
[h: oParams = json.get(macro.args,"parametri")]
[h: oOtherInfo = json.get(macro.args, "otherInfo")]

[h: sMsg = ""]


[h, if(bRemove == 1): return(0,sMsg)]

[h: sLibName = "Implacabile"]

[h: fDanno = string(json.get(oParams,"fDanno"))]
[h: sNome  = string(json.get(oParams,"nome"))]
[h: iDanno = roundRoll(fDanno)]
[h: param = json.set("","target",target,"source",target,"valore",iDanno,"verbose",0)]
[macro("core/DannoTarget@this"): param]

[h: sMsg= strformat("<img src='%s' width='25' height='25'/>&nbsp; %{sNome}. %s",
	fetchClassSkillImage(sLibName),
	popMessaggio(target,"strDanno"))]

[h: return(0, sMsg)]

