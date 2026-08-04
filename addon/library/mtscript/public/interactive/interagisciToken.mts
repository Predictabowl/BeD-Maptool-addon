[h: oInteractive = listGet(getSelected(),0)]

[h, if(oInteractive == ""): return(0,0)]

[h: sTokenType = getPropertyType(oInteractive)]
[h: aAllowed = json.append("Interattivo", "Oggetto Fisso")]
[h, if (!json.contains(aAllowed, sTokenType)): return(0,0)]

[h: source = getImpersonated()]
[h: nomeMacro = getProperty("nome_macro",oInteractive)]
[h, macro(nomeMacro): json.set("","source",source,"interattivo",oInteractive)]
[h: macro.return = 1]


