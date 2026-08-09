[h: source = macro.args]

[h: sNomeAb = "PotenzaEmpia"]
[h: bNecro = getDaMemoria(source, sNomeAb)]
[h, if(bNecro == 1): iLA = -3; iLA = -2]

[h: switchToken(source)]
[h: LA = LA + iLA]

[h:macro.return = ""]