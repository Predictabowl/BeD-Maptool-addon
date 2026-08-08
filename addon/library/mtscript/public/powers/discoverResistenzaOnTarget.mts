[h: spellName = arg(0)]
[h: source = arg(1)]
[h: target = arg(2)]
[h, if(ArgCount() > 3): jParams = arg(3); jParams = ""]

[h, if(json.contains(jParams, "isElement")): element = spellName; element = getSpellElement(source,spellName)]
[h, macro("core/caseResistName@this"):element]
[h: sResistenza = "Res_"+macro.return]

[h, foreach(id,target), code:{
	[h, if(isNPC(id)), code:{
		[sDisplayRes = "Sheet_"+sResistenza]
		[iResistenza = getProperty(sDisplayRes,id)]
		[if(iResistenza == ""): setProperty(sDisplayRes,strformat("{%s}",sResistenza),id)]
	}]
}]