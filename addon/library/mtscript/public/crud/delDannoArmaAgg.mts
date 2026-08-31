[h: oToken = arg(0)]
[h: sKey = arg(1)]

[h: sTag = "DANNOARMIAGGIUNTIVO"]

[h: oDanniAgg = getDaMemoria(oToken,sTag)]
[h: oDanniAgg = json.remove(oDanniAgg,sKey)]
[h: setInMemoria(oToken,sTag,oDanniAgg)]
[h: execFunction("guiUpdateSchedaDannoArmi", json.append("", oToken), 0, "all")]