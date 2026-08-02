[h: oOggetto = arg(0)]

[h: iAdd = json.get(oOggetto,"addArmatura")]
[h, if(!isNumber(iAdd)): iAdd = 0]

[h: macro.return = iAdd]