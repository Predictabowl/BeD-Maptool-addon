[h: oToken = arg(0)]

[h: switchToken(oToken)]
[h: iTox = getStrProp (Lista_Dati,"LivelloTossine")]
[h, if(!isNumber(iTox)): iTox = 0]

[h: macro.return = iTox]