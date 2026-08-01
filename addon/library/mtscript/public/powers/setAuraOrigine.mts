[h: source = json.get(macro.args,0)]
[h: sAuraId = json.get(macro.args,1)]
[h: tokenOrigine = json.get(macro.args,2)]

[h: switchToken(source)]

[h: oAura = json.get(Aure_Attive,sAuraId)]
[h: oOrigine = json.append(getTokenX(0,tokenOrigine),getTokenY(0,tokenOrigine), tokenOrigine)]
[h:oAura = json.set(oAura,"origine",oOrigine)]
[h: Aure_Attive = json.set(Aure_Attive,sAuraId,oAura)]