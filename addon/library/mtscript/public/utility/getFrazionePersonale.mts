[h: source = macro.args]

[h: switchToken(source)]
[h: iFrazione = getStrProp(Lista_Dati,"Frazione")]
[h, if(iFrazione == ""): iFrazione = 1]

[h: macro.return = iFrazione]