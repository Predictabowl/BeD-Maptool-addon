[h: sTipo = upper(macro.args)]

[h: oOggetti = getLibMemoria(getMacroLocation(),sTipo)]
[h: lOggetti = listSort(json.fields(oOggetti),"A")]

[h: macro.return = lOggetti]