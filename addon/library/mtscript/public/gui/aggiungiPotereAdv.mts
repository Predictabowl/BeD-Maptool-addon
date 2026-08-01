[h: target = json.get(macro.args,"target")]
[h: NomeLib = json.get(macro.args,"spell")]
[h, if(NomeLib==""): NomeLib = Nome_Libreria]

[h: addPoteriMem(target,NomeLib)]

