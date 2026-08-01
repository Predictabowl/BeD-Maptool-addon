[h: spellName = arg(0)]
[h: source = arg(1)]
[h: target = arg(2)]

[h, if(startsWith(spellName,"Lib:")): element = getSpellElement(source,spellName); element = spellName]
[h, macro("core/caseResistName@this"):element]
[h: sResistenza = "Res_"+macro.return]

[h, foreach(id,target), code:{
	[h, if(isNPC(id)), code:{
		[sDisplayRes = "Sheet_"+sResistenza]
		[iResistenza = getProperty(sDisplayRes,id)]
		[if(iResistenza == ""): setProperty(sDisplayRes,strformat("{%s}",sResistenza),id)]
	}]
}]