[h: oToken = arg(0)]

[h: jSonate = getDaMemoria(oToken,"Sonate-Data")]
[h, if(json.isEmpty(jSonate)): return(0,"[]")]
[h: macro.return = json.get(jSonate,"MotiviConosciuti")]
