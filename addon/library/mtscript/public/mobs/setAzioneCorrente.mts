[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: sNome = json.get(macro.args,"nome")]
[h: sTipo = json.get(macro.args,"tipo")]
[h: sMacro = json.get(macro.args,"macro")]
[h: oMacroParam = json.get(macro.args,"macroParam")]

[h: switchToken(source)]

[h: Azione_Corrente=json.set(Azione_Corrente,"Nome",sNome)]
[h: Azione_Corrente=json.set(Azione_Corrente,"Bersaglio",target)]
[h: Azione_Corrente=json.set(Azione_Corrente,"Tipo",sTipo)]
[h: Azione_Corrente=json.set(Azione_Corrente,"Macro",sMacro)]
[h: Azione_Corrente=json.set(Azione_Corrente,"MacroParam",oMacroParam)]