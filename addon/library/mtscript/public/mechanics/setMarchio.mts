[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: sMacroName = json.get(macro.args,"macroInfranto")]
[h: macroParam = json.get(macro.args,"macroParam")]
[h: sMacroRemove = json.get(macro.args,"macroRemove")]
[h: sTipo = upper(json.get(macro.args,"tipo"))]
[h: iDurata = json.get(macro.args,"durata")]
[h: sNome = json.get(macro.args,"nome")]
[h, if(sNome == ""): sNome = "EFFETTOMARCHIO"]

[h, if(isNumber(iDurata) == 0): iDurata = -1]

[h: sProt = "PROTEZIONE"]
[h: sSfida = "SFIDA"]
[h: sProp = "PROPRIETARIO"]

[macro("mechanics/removeMarchioSource@this"):source]
[macro("mechanics/removeMarchioTarget@this"):json.append(source,sProt)]

<!-- Imposto il marchio sul lanciatore -->
[h: mTemp = getProperty("Marchi",source)]
[h: oData = json.set("","targets","","MacroName",sMacroName,"MacroParam",macroParam,"MacroRemove",sMacroRemove,"tipo",sTipo,"NomeEffetto",sNome)]
[h: mTemp = json.set(mTemp,sProp,oData)]
[h: setProperty("Marchi",mTemp,source)]

<!-- Imposto l'effetto per la durata -->
[h: param = json.set("","target",source)]
[h: param = json.set(param,"durata",iDurata)]
[h: param = json.set(param,"effetto",sNome)]
[h: param = json.set(param,"tipo","MARCHIO")]
[h: param = json.set(param,"mutex","MARCHIO")]
[h: param = json.set(param,"verbose",0)]
[h: param = json.set(param,"messaggi",0)]

[h: temp = json.set("","macroName","effectRemoveMarchio@"+getMacroLocation(),"tipo","macroCall")]
[h: altro = json.append("",temp)]
[h: param = json.set(param,"params",altro)]

[macro("core/ApplyEffect@this"): param]

<!-- Imposto il marchio sui bersagli -->
[h, foreach(oID,target), code:{
	[macro("mechanics/addMarchioTarget@this"): json.append(source,oID,macroParam)]
}]

