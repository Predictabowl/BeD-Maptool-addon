[h: oBersaglio = macro.args]

[h: sOwner = substring(getName(oBersaglio),10)]
[h: oOwner = findToken(sOwner)]

[h: macro.return = oOwner]