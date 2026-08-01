[h: sMacro = arg(0)]
[h: sParams = arg(1)]


[h: switchToken("MapVar")]
[h: jItem = json.set("","macroName",sMacro,"macroParam",sParams)]
[h: Delayed_Run_Macros = json.append(Delayed_Run_Macros,jItem)]