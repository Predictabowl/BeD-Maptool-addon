[h: source = json.get(macro.args,"source")]
[h: spellSigillo = upper(json.get(macro.args,"spellSigillo"))]
[h: sElemento1 = upper(json.get(macro.args,"elemento"))]
[h: iCD = json.get(macro.args,"CD")]
[h: oOrigine = json.get(macro.args,"origine")]
[h: eventParam = json.get(macro.args,"eventParam")]

[h: spellName = json.get(eventParam,"spellName")]

[macro("powers/getSpellElement@this"): json.set("","source",source,"spellName",spellName)]
[h: sElemento2 = upper(macro.return)]

[h: sMsg = ""]
[h, if(sElemento1 == sElemento2), code:{
	[macro("powers/getSpellTSResult@this"): json.set("","source",oOrigine,"target",source,"spellToken",spellSigillo,"CD",iCD)]
	[bTS = macro.return]
	
	[macro("utility/popMessaggio@this"):json.set("","token",source,"key","TSResult")]
	[sMsg = strformat("%{sMsg} %{macro.return}")]

	[if(!bTS), code:{
		[macro("core/pushOverride@this"): json.append(source,"SpellBlock")]
		[macro("powers/getSpellPrice@this"):json.set("","source",source,"spellName",spellName)]
		[macro("core/payAction@this"): macro.return]
		[sMsg = strformat("%{sMsg}<br>L'incantesimo %s viene <i>Disturbato</i> dall'effetto di %s",getLibProperty("nome_decorativo",spellName),getLibProperty("nome_decorativo",spellSigillo))]
	}]
	[broadcast(sMsg)]
}]

[h: macro.return = ""]