[h: oSource = json.get(macro.args,0)]
[h: oTarget = json.get(macro.args,1)]
[h: idAura = json.get(macro.args,2)]

[h: oTarget = findToken(oTarget)]
[h: sTag = "bersagliAuraColpiti-"+idAura]
[h: aBersagli = getDaMemoriaRound(oSource, sTag)]
[h: aBersagli = json.append(aBersagli, oTarget)]
[h: setInMemoriaRound(oSource, sTag, aBersagli)]