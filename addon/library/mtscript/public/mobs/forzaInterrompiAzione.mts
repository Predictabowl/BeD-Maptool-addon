[h: target = arg(0)]
[h, if(argCount()>1): spellName = arg(1); spellName = getSpellInCast(target)]
[h, if(argCount()>2): bOpp = arg(2); bOpp = 0]

[macro("mobs/InterrompiAzione@this"): target]

[h, if(spellName == ""): return(0,0)]
[h: switchToken(target)]
[macro("powers/getSpellPrice@this"): json.set("","source",target,"spellName",spellName,"isOpport",bOpp)]
[h: aResult = macro.return]

[h: iMana = min(roundRoll(json.get(aResult,"mana")/2),Mana)]
[h: iPA = min(roundRoll(json.get(aResult,"PA")/2),PA)]
[h: iPF = min(roundRoll(json.get(aResult,"PF")/2),PF)]
[h: iPP = min(roundRoll(json.get(aResult,"PP")/2),PP)]

[h: Mana = Mana - iMana]
[h: PF = PF - iPF]
[h: PA = PA - iPA]
[h: PP = PP - iPP]

<!-- No need to calculate PA based on PP, PP will go on negative and will be payed on next power -->