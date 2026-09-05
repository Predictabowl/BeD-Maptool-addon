[h: target = json.get(macro.args, "target")]
[h: bRemove = json.get(macro.args,"remove")]

[h: spellId = "FavoreInstabile"]

[h, if(bRemove == 1): return(0,"")]
[h: switchToken(target)]
[h: iPA = roll(1,4)]
[h: PA = PA + iPA]

[h: sImg = fetchSpellImage(spellId)]
[h: sMsg = strformat("<span title='%s'><img src='%{sImg}' width='25'>&nbsp; %s guadagna %+d PA</span>", fetchSpellProp(spellId,"nome_decorativo"), getName(target), iPA)]
[h: return(0, sMsg)]