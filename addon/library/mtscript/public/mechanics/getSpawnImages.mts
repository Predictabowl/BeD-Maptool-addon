[h: source = json.get(macro.args,0)]
[h: sNome = json.get(macro.args,1)]

[h: switchToken(source)]
[h: sTokenImages = getDaMemoria(source, "creature-images")]
[h, if(json.isEmpty(sTokenImages)): return(0,"")]
[h: macro.return = json.get(sTokenImages, sNome)]