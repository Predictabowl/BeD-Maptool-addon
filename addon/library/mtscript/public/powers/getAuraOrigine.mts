[h: source = json.get(macro.args,0)]
[h: sAuraId = json.get(macro.args,1)]

[h: switchToken(source)]
[h: oAura = json.get(Aure_Attive,sAuraId)]
[h: oOrigine = json.get(oAura,"origine")]
[h: macro.return = oOrigine]