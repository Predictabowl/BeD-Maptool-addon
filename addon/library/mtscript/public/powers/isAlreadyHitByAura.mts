[h: oSource = arg(0)]
[h: oTarget = arg(1)]
[h: idAura = arg(2)]

[h: aBersagli = getDaMemoriaRound(oSource, "bersagliAuraColpiti-"+idAura)]

[if(json.contains(aBersagli,oTarget)): bResult = 1; bResult = 0]

[h: macro.return = bResult]