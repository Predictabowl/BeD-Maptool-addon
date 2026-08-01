[h: oToken = arg(0)]
[h: sClasse = upper(arg(1))]

[h: switchToken(oToken)]

[h, if(!isNumber(LC)): LC = 0]
[h: sClasse1 = upper(Classe)]
[h, if(sClasse1 == sClasse): return(0,LC)]

[h, if(!isNumber(LC2)): LC2 = 0]
[h: sClasse2 = upper(Classe2)]
[h, if(sClasse2 == sClasse): return(0,LC2)]

[h: macro.return = 0]