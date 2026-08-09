[h: source = macro.args]


[h: libName = "PotenzaPrimordiale"]
[h: oData = getDaMemoria(source, libName)]
[h, if(json.isEmpty(oData)): return(0,"")]

[h: sCar = json.get(oData,0)]
[h: fMod = json.get(oData,1)]

[h: fVal = getProperty(sCar, source)]
[h: fVal = fVal - fMod]
[h: setProperty(sCar, fVal, source)]
[h: delDaMemoria(source, libName)]

[h:macro.return = ""]