[h: oArma = arg(0)]

[h, macro("items/getTipoArma@this"): oArma]
[h: sTipo = upper(macro.return)]

[h, if(sTipo == "ARTEFATTO"): return(0,1)]

[h: macro.return = 0]