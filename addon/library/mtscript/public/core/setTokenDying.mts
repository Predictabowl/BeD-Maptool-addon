[h: oTarget = macro.args]

[h: switchToken(oTarget)]

[h: sStato = "Atterrato"]
[macro("powers/getParamStatoBase@this"): json.set("","target",oTarget,"effetto",sStato)]
[h: parameters = macro.return]
[macro("core/ApplyEffect@this"): parameters]
[setState("Morente",1,oTarget)]

[h: delMantenimenti(oTarget)]
[h: disattivaAbilitaTutte(oTarget)]

[h: macro.return = 1]