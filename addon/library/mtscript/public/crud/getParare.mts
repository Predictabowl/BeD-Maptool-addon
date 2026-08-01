[h: target = arg(0)]

[h: switchToken(target)]
[h: iMod = Parare + Risolutezza -5 +(Vigore -6)*3]
[h: iMod = iMod + getStatModifier(target,"Parare")]
[h, if(getState("Morente",target) || getState("Morte",target)): iMod = -1]

[h: macro.return = iMod]