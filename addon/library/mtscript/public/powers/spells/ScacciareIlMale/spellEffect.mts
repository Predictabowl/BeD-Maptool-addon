[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]


[h: sCatRaz = upper(trim(getProperty("Cat_Razziale",target)))]
[h, if(sCatRaz != "NON MORTO" && sCatRaz != "DEMONE"), code:{
	[appendMessaggio(source,"strPotere",strformat("%s è immune agli effetti dell'incantesimo",getName(target)))]
	[return(0,"")]
}]

[h: switchToken(source)]
[h: spellName = "ScacciareIlMale"]
[h: nomeDec = fetchSpellProp(spellName,"nome_decorativo")]


[h: param = json.set("","target",target,"nome",nomeDec,"effetto","Paura","moltiplicatore",3)]
[macro("powers/getParamStatoBase@lib:it.aldinucci.piero.bed.maptool.ruleset"):param]
[h: oEffetto = json.set(macro.return, "categoria", "Scacciare_il_Male")]

[macro("powers/effectSpellTemplate@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.set(macro.args,"spellName",spellName,"effetto",oEffetto)]