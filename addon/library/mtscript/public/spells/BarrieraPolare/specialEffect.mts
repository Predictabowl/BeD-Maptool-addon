[h: source = json.get(macro.args,"difensore")]
[h: target = json.get(macro.args,"attaccante")]
[h: owner = json.get(macro.args,"proprietario")]
[h: iCD= json.get(macro.args,"CD")]

[h:spellName = "BarrieraPolare"]

[h: param = json.set("","target",target,"source",owner,"spellToken",spellName,"CD",iCD)]
[macro("powers/getSpellTSResult@lib:it.aldinucci.piero.bed.maptool.ruleset"):param]	
[TSResult = macro.return]
[h, if(TSResult == 0): iMolt = 3; iMolt = 1]

[macro("utility/popMessaggio@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.set("","token",target,"key","TSResult")]
[h: msgOut = macro.return]


[h: nomeDec = "Marchio: "+fetchSpellProp(spellName,"nome_decorativo")]
[h: param = json.set("","target",target,"source",owner,"durata",1,"nome",nomeDec,"effetto","Congelamento","moltiplicatore",iMolt)]
[macro("powers/getParamStatoBase@lib:it.aldinucci.piero.bed.maptool.ruleset"): param]

[macro("core/ApplyEffect@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.set(macro.return,"verbose",0)]

[macro("utility/popMessaggio@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.set("","token",target,"key","msgEffetto")]
[h, if(macro.return != ""): msgOut = strformat("%{msgOut}<br>%{macro.return}")]

[h: macro.return = msgOut]