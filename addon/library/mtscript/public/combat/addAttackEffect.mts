[h: target = macro.args]

[h: iDurata =1]
[h: iMod = 1]
[h: sEffetto = "AttacchiBonus")]
[macro("core/getEffect@this"): json.append(target,sEffetto)]
[h:oldEffect = macro.return]
[h, if(json.type(oldEffect) == "OBJECT"), code:{
	[temp = json.get(oldEffect,"params")]
	[oFirst = json.get(temp,0)]
	[iOldValue = json.get(oFirst,"value")]
	[iMod = iOldValue +1]
}]

[h: param = json.set("","target",target,"durata",iDurata,"effetto",sEffetto,"subito",1,"tipo","Speciale")]

[h: temp = json.set("","key","Num_Attacchi","value",iMod,"tipo","onceMod")]
[h: altro = json.append("",temp)]
[h: param = json.set(param,"params",altro)]
[macro("core/ApplyEffect@this"):param]
