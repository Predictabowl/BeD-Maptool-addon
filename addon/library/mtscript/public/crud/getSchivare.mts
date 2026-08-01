[h: target = arg(0)]

[h: switchToken(target)]
[h: iMod = Schivare + Risolutezza -5 + (Precisione -5)*2]
[h: iMod = iMod + getStatModifier(target,"Schivare")]

[h, if(getState("Morente",target) || getState("Morte",target)): iMod = -1]

[h: macro.return = iMod]