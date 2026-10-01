[h: target = arg(0)]
[h, if(argCount()>1): spellName = arg(1); spellName = getSpellInCast(target)]
[h, if(argCount()>2): bOpp = arg(2); bOpp = 0]

[macro("mobs/InterrompiAzione@this"): target]

[h, if(spellName == ""): return(0,0)]
[h: switchToken(target)]
[macro("powers/getSpellPrice@this"): json.set("","source",target,"spellName",spellName,"isOpport",bOpp)]
[h: aResult = macro.return]

[h: iMana = min(roundRoll(json.get(aResult,"mana")/2),Mana)]
[h: Mana = Mana - iMana]
[h: iPF = min(roundRoll(json.get(aResult,"PF")/2),PF)]
[h: PF = PF - iPF]

[h: iPP = PP - roundRoll(json.get(aResult,"PP")/2)]
[h: iPA = min(iPP, 0)]
[h: PP = max(iPP, 0)]

[h: iMM = MM - roundRoll(json.get(aResult,"MM")/2)]
[h: iPA = iPA + min(iMM, 0)]
[h: MM = max(iMM, 0)]

[h: iPA = PA + iPA - roundRoll(json.get(aResult,"PA")/2)]
[h: PA = max(iPA, 0)]

[h, macro("utility/updateBars@this"):target]