[h: source = macro.args]

[h:switchToken(source)]
[h: iReturn = getStrProp(Lista_Dati,"MOVIMENTOSPECIALE")]
[h, if(isNumber(iReturn) == 0 ): iReturn=0]
[h: macro.return = iReturn]