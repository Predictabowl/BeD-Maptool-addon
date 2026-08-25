[h: source = json.get(macro.args,0)]
[h: sAbilita = json.get(macro.args,1)]
[h, if(json.length(macro.args) > 2) : disOverride = json.get(macro.args,2); disOverride = 0]
[h: switchToken(source)]

[h: bSuccess = 1]
[h: oAbilitaParam = json.append(source,sAbilita)]

[macro("class_skills/isAbilitaInUso@this"): oAbilitaParam]
[h, if(macro.return != 1): return(0,bSuccess)]


[macro("class_skills/getDurataAbilita@this"): oAbilitaParam]
[h: sDurata = upper(string(macro.return))]

[h, if(sDurata == "TERMINE ROUND" && disOverride != 1), code:{
	[bInput = input("junkVar||Per disattivare questa abilità dovrai pagare 2 PA|LABEL|TEXT=FALSE")]
	[if(!bInput): return(0,0)]
	[bPay = payAction(json.set("","token",source,"PA",2))]
	[if(!bPay): return(0,0)]
}]

[h, macro("class_skills/cleanerAbilita@this"):oAbilitaParam]
[h, macro("class_skills/delAbilitaInUso@this"):oAbilitaParam]
[h: execFunction("guiUpdateClassSkillStatus", json.append(source, sAbilita, 0))]

[h: macro.return = bSuccess]