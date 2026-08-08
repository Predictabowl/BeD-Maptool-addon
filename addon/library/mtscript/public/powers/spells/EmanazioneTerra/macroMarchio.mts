[h: source = json.get(macro.args,"difensore")]
[h: target = json.get(macro.args,"attaccante")]
[h: owner = json.get(macro.args,"proprietario")]
[h: iCD = json.get(macro.args,"CD")]

[h:spellName = "EmanazioneTerra"]

[h: param = json.set("","target",target,"source",owner,"spellToken",spellName,"CD",iCD)]
[macro("powers/getSpellTSResult@lib:it.aldinucci.piero.bed.maptool.ruleset"):param]	
[TSResult = macro.return]
[h: msgOut = popMessaggio(target,"TSResult")]

[h, if(!TSResult), code:{
	[h: iMolt = 3]
	[h: nomeDec = "Marchio: "+fetchSpellProp(spellName,"nome_decorativo")]
	[h: param = json.set("","target",target,"source",owner,"durata",1,"nome",nomeDec,"effetto","Lentezza","moltiplicatore",iMolt)]
	[macro("powers/getParamStatoBase@lib:it.aldinucci.piero.bed.maptool.ruleset"): param]

	[macro("core/ApplyEffect@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.set(macro.return,"verbose",0)]

	[macro("utility/popMessaggio@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.set("","token",target,"key","msgEffetto")]
	[h, if(macro.return != ""): msgOut = strformat("%{msgOut}<br>%{macro.return}")]
}]

[h: macro.return = msgOut]