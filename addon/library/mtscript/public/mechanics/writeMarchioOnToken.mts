[h: oToken = json.get(macro.args,0)]
[h: sTipo = json.get(macro.args,1)]
[h: oMarchio = json.get(macro.args,2)]

[h: switchToken(oToken)]
[h: Marchi = json.set(Marchi,sTipo,oMarchio)]