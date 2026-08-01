[h: oToken = json.get(macro.args,0)]
[h: sEffetto = json.get(macro.args,1)]
[h: oNewInfo = json.get(macro.args,2)]

[h: assert(json.type(oNewInfo) == "OBJECT","Paramentro otherInfo di tipo non corretto")]

[h: oEffetto = getEffetto(oToken,sEffetto)]
[h, if(json.type(oEffetto) != "OBJECT"): return(0,"{}")]

[h: oOtherInfo = json.get(oEffetto,"otherInfo")]
[h: oOtherInfo = json.merge(oOtherInfo,oNewInfo)]
[h: oEffetto = json.set(oEffetto,"otherInfo",oOtherInfo)]

[h, macro("core/setEffect@this"):json.append(oToken,sEffetto,oEffetto)]