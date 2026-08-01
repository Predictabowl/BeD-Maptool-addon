[h: source = macro.args]

[h: switchToken(source)]
[h: iDifendersi = getStrProp(Lista_Dati,"DIFENDERSI")]
[h, if(!isNumber(iDifendersi)): return(0,0)]
[h, if(iDifendersi < 1): return(0,0)]
[h: macro.return = 1]