[h: target = json.get(macro.args,"target")]
[h: source = json.get(macro.args,"source")]
[h: spell = json.get(macro.args,"spell")]
[h: bUtile = json.get(macro.args, "isHelpful")] <!-- Opzionale -->
[macro("powers/getSpellProiettile@this"): json.set("","source",source,"spellName",spell)]
[h: tipo = macro.return]

[h, if(!isNumber(bUtile)), code:{
	[macro("powers/isHelpful@this"): spell]
	[h: bUtile = macro.return]
}]

[macro("powers/getSpellOrigine@this"): json.append(source,spell)]
[h: sPuntoOrigine = macro.return]

[r, if(tipo != "POTENZIALE" && target != source && bUtile == 0), code:{
	[macro("combat/coperturaRoll@this"): json.set("","target",target,"source",source,"origine",sPuntoOrigine)]
};{
	[h: macro.return = 0]
}]