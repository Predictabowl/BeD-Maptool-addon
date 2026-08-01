[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: spell = json.get(macro.args,"spellName")]


[h: fCM = getCritProb(getCrit(source))]
[h: fPCM = getPCrit(source)/100]

[h: fReturn = (fCM*fPCM)]

[h: macro.return = fReturn]