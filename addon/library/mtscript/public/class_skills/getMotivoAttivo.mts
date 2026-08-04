[h: oToken = arg(0)]

[h: jSonate = getDaMemoria(oToken,"Sonate-Data")]
[h, if(json.isEmpty(jSonate)): return(0,"")]
[h: sMotivo = json.get(jSonate,"MotivoAttivo")]
[h: macro.return = sMotivo]