[h: oOggetto = macro.args]

[h: libToken = getMacroLocation()]

[h: sNome = json.get(oOggetto,"nomeOggetto")]
[h: sTipo = upper(json.get(oOggetto,"tipo"))]
[h: oGroupInfo = getLibMemoria(libToken,sTipo)]
[h: oInfo = json.get(oGroupInfo,sNome)]
[h: macro.return = oInfo]