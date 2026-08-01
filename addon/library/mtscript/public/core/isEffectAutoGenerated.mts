[h: oEffetto = arg(0)]

[h, if(json.type(oEffetto) != "OBJECT"): oEffetto ="{}"]
[h: bRoundUpdating = json.get(oEffetto,"roundUpdating")]
[h, if(!isNumber(bRoundUpdating)): bRoundUpdating = 0]

[h: macro.return = bRoundUpdating]