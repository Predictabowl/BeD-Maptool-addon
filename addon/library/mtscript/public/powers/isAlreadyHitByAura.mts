[h: oSource = json.get(macro.args,0)]
[h: oTarget = json.get(macro.args,1)]
[h: idAura = json.get(macro.args,2)]

[h: oTarget = findToken(oTarget)]
[h: aBersagli = getDaMemoriaRound(oSource, "bersagliAuraColpiti-"+idAura)]

[if(json.contains(aBersagli,oTarget)): bResult = 1; bResult = 0]

[h: macro.return = bResult]