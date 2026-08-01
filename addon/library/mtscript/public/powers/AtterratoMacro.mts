[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: bRemove = json.get(macro.args,"remove")]
[h: bMacroCalled = json.get(macro.args,"macroCalled")]

[h, if(bRemove == 1), code:{
	[macro("addMoveModifiers@Lib:Movement"): json.set("","token",target,"MoveMul",-1)]
	[popOverride(target,"bloccaOpportunitaOverride")]
	[return(0,"")]
}]

[h, if(bMacroCalled): return(0,"")]

[macro("addMoveModifiers@Lib:Movement"): json.set("","token",target,"MoveMul",1)]
[pushOverride(target,"bloccaOpportunitaOverride")]

[h, if(source != ""), code:{
	[macro("powers/rollConcentrazione@this"): json.append(target,source)]
	[bConc = json.get(macro.return,0)]
	[sMsg = popMessaggio(source,"msgRollConcentrazione")]
};{
	[bConc = 1]
	[broadcast(strformat("Source effetto Atterrato (su %s) mancante, tiro concentrazione assunto con successo automatico.",getName(target)),"gm")]
}]

[h, if(bConc), code:{
	[macro("mobs/InterrompiAzione@this"): target]
};{
	[macro("mobs/forzaInterrompiAzione@this"): target]
	[sMsg = strformat("%s fallisce la prova <span title='%{sMsg}'>Concentrazione</span>", getName(target))]
	[return(0,sMsg)]
}]

[h: macro.return = ""]