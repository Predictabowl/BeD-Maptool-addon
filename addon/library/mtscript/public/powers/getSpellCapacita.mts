[h: spellName = arg(0)]
[h: oToken = arg(1)]

[h, if(isItemInCast(oToken,spellName)): return(0,"Manualita")]
[h: sReturn = fetchSpellProp(spellName,"capacita")]
[h, if(sReturn ==""): sReturn = "Arcanologia")]
[h: macro.return = sReturn]