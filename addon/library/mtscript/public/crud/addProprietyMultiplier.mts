[h: sProperty = arg(0)]
[h: fMod = arg(1)]
[h, if(argCount()>2): oToken = arg(2); oToken = currentToken()]

[h: sLabel = "MoltiplicatoriProprieta"]

[h: oMolt = getDaMemoria(oToken,sLabel)]
[h, if(json.type(oMolt) != "OBJECT"): oMolt = "{}"]
[h: fMolt = json.get(oMolt,sProperty)]
[h, if(!isNumber(fMolt)): fMolt = 0]
[h: fMolt = fMolt+fMod]
[h: oMolt = json.set(oMolt,sProperty,fMolt)]

[h: setInMemoria(oToken,sLabel,oMolt)]