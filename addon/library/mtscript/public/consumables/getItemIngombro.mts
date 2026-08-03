[h: oOggetto = arg(0)]

[h: iIng = json.get(oOggetto,"ingombro")]
[h, if(!isNumber(iIng)): iIng = 1]

[h: macro.return = iIng]