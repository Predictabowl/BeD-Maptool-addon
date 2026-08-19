[h: target= json.get(macro.args,"target")]
[h: param = json.get(macro.args,"parametri")]
[h: power = json.get(param,"power")]

[h: iLL = getProperty("LL_Base",target)]

[h, if(getState("Incendio", target)): return(0,"Il fuoco previene l'effetto di rigenerazione.")]

[r, if(iLL > 0), code:{
	[h: param = json.set("","target",target,"source",target,"LL",iLL,"healLL",power)]
	[macro("powers/getSpellHeal@this"):param]
	[h: cura = macro.return]
	[h: param = json.append("",target,cura)]
	[macro("core/CuraTarget@this"): param]
};{}]


