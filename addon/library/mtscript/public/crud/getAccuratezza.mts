[h: target = arg(0)]

[h: iMod = getProperty("Accuratezza",target)]
[h: iMod = iMod + getStatModifier(target,"Accuratezza")]

[h, if(getState("Morente",target) || getState("Morte",target)): iMod = -1]

[h: macro.return = iMod]