[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: spellName = json.get(macro.args,"spellName")]


[macro("powers/getCriticoStatico@this"):json.set("","source",source,"target",target,"spellName",spellName)]
[h: fCMSt = macro.return]

[h: args = json.set("","source",source,"target",target,"spellName",spellName,"critRes",0)]
[macro("powers/getAutoLL@this"): args]
[h: iLL = roundRoll(macro.return*(1+fCMSt))]

[h: switchToken(source)]
[h, if(iLL> Livello): iLL = Livello]

[h: macro.return = iLL]