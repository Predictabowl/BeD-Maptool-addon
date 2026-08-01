[h: sProperty = arg(0)]
[h, if(argCount()>1): oToken = arg(1); oToken = currentToken()]

[h: oValue = getProperty(sProperty,oToken))]

[h, if(!isNumber(oValue)): return(0,oValue)]

[h: oMolt = getDaMemoria(oToken,"MoltiplicatoriProprieta")]
[h, if(json.type(oMolt) != "OBJECT"): oMolt = "{}"]
[h: iMolt = json.get(oMolt,sProperty)]
[h, if(!isNumber(iMolt)): iMolt = 1]

[h: macro.return = oValue*iMolt]