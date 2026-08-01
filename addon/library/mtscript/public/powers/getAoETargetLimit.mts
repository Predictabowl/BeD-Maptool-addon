[h: spellName = arg(0)]
[h, if(argCount()>1): oToken = arg(1); oToken = ""]
<!-- Al momento oToken non è utilizzato, è presente per permettere di cambiare area dinamicamente -->

[h: lAoETags = upper(getLibProperty("tipo_AOE",spellName))]

[h, foreach(sTag, lAoeTags), code :{
	[h, if(isNumber(sTag)): return(0, sTag)]
}]

[h: macro.return = 100]