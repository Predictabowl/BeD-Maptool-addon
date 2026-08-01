[h: source = arg(0)]

[h: target = findToken(getSelected())]

[h, if(target == ""): return(0, "")]

[h, if(!isHostile(source, target)), code:{
	[sMsg = strformat("sNoUse|ATTENZIONE: Stai bersagliando %s||LABEL|Span=TRUE", getName(target))]
	[if(!input (sMsg)) : return(0,"")]
}]


[h: macro.return = target]
