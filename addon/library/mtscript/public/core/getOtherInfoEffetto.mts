[h: oToken = json.get(macro.args,0)]
[h: sEffetto = json.get(macro.args,1)]

[h: oEffetto = getEffetto(oToken,sEffetto)]
[h, if(json.type(oEffetto) != "OBJECT"): return(0,"{}")]

[h: macro.return = json.get(oEffetto,"otherInfo")]