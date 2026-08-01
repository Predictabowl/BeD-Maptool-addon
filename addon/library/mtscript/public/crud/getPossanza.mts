[h: target = arg(0)]

[h: iMod = getProperty("Possanza",target)]
[h: iMod = iMod + getStatModifier(target,"Possanza")]

[h, if(getState("Morente",target) || getState("Morte",target)): iMod = -1]

[h: macro.return = iMod]