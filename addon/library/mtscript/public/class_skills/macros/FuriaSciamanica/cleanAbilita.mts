[h: source = macro.args]

[h:sNomeAb = "FuriaSciamanica"]
[h: switchToken(source)]
[h: fMod = getDaMemoria(source, sNomeAb)]
[h: Mod_Danno_Out = Mod_Danno_Out - fMod]
[h: delDaMemoria(source, sNomeAb)]

[h:macro.return = ""]