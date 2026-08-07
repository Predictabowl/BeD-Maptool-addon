[h: source = json.get(macro.args,"source")]
[h: spellName = json.get(macro.args,"spellName")]
[h: param = macro.args]

[h: switchToken(source)]

[macro("powers/checkSpellCast@this"): json.append(source,spellName)]
[h: assert(macro.return,"Non puoi lanciare questo incantesimo")]

[h: target = ""]
[r, if(json.contains(macro.args,"target") == 1), code:{
	[h: target = json.get(macro.args,"target")]
};{
	[h: target = json.get(Azione_Corrente,"Bersaglio")]
	[h, if(target==""): target = getSelected()]
	[h, if(target=="null"): target = getSelected()]
}]

[h: action = json.get(Azione_Corrente,"Nome")]
[h: ini = getInitiative()]
[h, if(isNumber(ini)==0): ini = -1]

[r, if (action == SpellName || ini < 0), code:{
	[h: param = json.set(param,"target",target)]
	[macro("powers/getSpellPrice@"+getMacroLocation()):param]
	
	[macro("core/payAction@this"): macro.return]
	[r, if(macro.return == 1), code:{
		[macro("powers/callSpellEffect@this"): param]
	};{}]
	[macro("mobs/FineAzione@this"):source]
	[macro("powers/endOfCastUpdates@this"): json.set("","source",source,"spell",spellName)]

};{
	[h: time = getLibProperty("tempo",spellName)]
	[macro("powers/getSpellTimeMod@this"):source]
	[h, if(macro.return+time <1): time = 1; time = macro.return+time]
	[h: color = getLibProperty("colore_decorativo",spellName)]
	[h: tipo = getLibProperty("tipo",spellName)]
	[h: opport = getLibProperty("opportunita",spellName)]
	[h: param = json.set("","target",target,"source",source,"action",spellName,"time",time,"color",color,"tipo",tipo,"opp",opport)]
	[macro("mobs/IniziaAzione@this"):param]
}]