[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: iLL = json.get(macro.args,"LL")]
[h: remove = json.get(macro.args,"remove")]

[h: spellName = "SorgenteCurativa"]

[h, if(remove != 1), code:{
	[switchToken(source)]
	[h: sTargetList = "BersagliColpiti"]

	[h: idAura = fetchSpellProp(spellName,"nome_decorativo")]
	[h: oAura = json.get(Aure_Attive,idAura)]
	
	[h, if(json.contains(oAura,"round")), code:{
		[iRound = json.get(oAura,"round")]
	};{
		[iRound = 1]
	}]
	[h: berColpiti = json.get(oAura,sTargetList)]

	[h: iCura = 0]
	[if(listContains(berColpiti,target) == 0), code:{
		[param = json.set("","LL",iLL,"healLL",string(iRound),"target",target,"source",source)]
		[macro("powers/getSpellHeal@lib:it.aldinucci.piero.bed.maptool.ruleset"): param]
		[iCura = macro.return]
		[h: param = json.set("","target",target,"valore",iCura)]
		[macro("core/CuraTarget@lib:it.aldinucci.piero.bed.maptool.ruleset"): param]
		[iCura = macro.return]
		
		[h: oMacroParam = json.set("","auraOwner",source)]
		[macro("events/eventInstaller@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.set("","name",spellName,"macroName",buildSpellMacroName("SorgenteCurativa","eventAura"),"macroParam",oMacroParam,"event","On_Damaged","token",target)]
	}]

	[h, if(iCura > 0) ,code:{
		[berColpiti = listAppend(berColpiti,target)]
		[oAura = json.set(oAura,sTargetList,berColpiti)]
		[Aure_Attive = json.set(Aure_Attive,idAura,oAura)]
	}]
};{
		[macro("events/eventUninstaller@lib:it.aldinucci.piero.bed.maptool.ruleset"):json.set("","name",spellName,"event","On_Damaged","token",target)]
}]
