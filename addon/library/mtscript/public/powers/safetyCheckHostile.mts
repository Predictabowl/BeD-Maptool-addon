[h: source = json.get(macro.args,0)]
[h: target = json.get(macro.args,1)]
[h: spellName = json.get(macro.args,2)]
[h, if(argCount()>3): bRisoluzione = arg(3); bRisoluzione = 0]


[h: target = findToken(target)]
[h, if(target ==""): return(0,0)]

[h: oTipo = getPropertyType(target)]
[h, if (oTipo != "Basic"): return(0,0)]

[h: spellTag = getLibProperty("tags",spellName)]
[h, if(listContains(spellTag,"SELFTARGET") == 1): return(0,0)]
[h, if(listContains(spellTag,"CELLTARGET") == 1): return(0,0)]

[h: bAoE = isAoESpell(spellName, source)]
[h, if(!bRisoluzione && bAoE && source == target): return (0,0)]
[h, if(bRisoluzione && bAoE): bHarmful = isAoEHarmfulSpell(spellName); bHarmful = isHarmfulSpell(spellName)]
	
[h: bHelpful = isHelpfulSpell(spellName)]
[h: bHostile = isHostile(source,target)]
[h, if(bHelpful && bHarmful): bHelpful = 0 ]


[h, if((bHostile && bHelpful) || (!bHostile && bHarmful)), code:{
	[nomeDec = getLibProperty("nome_decorativo",spellName)]
	[h: sMsg = strformat("sNoUse|ATTENZIONE: Stai lanciando %s su %s||LABEL|Span=TRUE",nomeDec,getName(target))]
	[return (0,!input (sMsg))]
}]

[h: macro.return = 0]
