[h: oToken = json.get(macro.args,0)]
[h: iArma = json.get(macro.args,1)-1]

[h: switchToken(oToken)]
[h: macro.return =  listGet(Armi_Equipaggiate,iArma)]
