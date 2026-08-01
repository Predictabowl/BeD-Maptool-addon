[h: oToken = arg(0)]

[h: jMem = getDaMemoria(oToken,"AUTOCAST")]
[h, if(json.type(jMem) != "OBJECT"): return(0,0)]

[h: jMem = json.remove(jMem, "PECULIARE")]
[h: jMem = json.remove(jMem, "ATTIVA")]

[h: setInMemoria(oToken,"AUTOCAST", jMem)]
