[h: oOggetto = arg(0)]

[h, if(json.type(oOggetto) != "OBJECT"): return(0, "{}")]

[h: oDati = json.get(oOggetto, "datiCustom")]
[h, if(json.type(oDati) != "OBJECT"): return(0, "{}")]

[h: oRuneSet = json.get(oDati,"RuneInstallate")]
[h, if(json.type(oRuneSet) != "OBJECT"): oRuneSet = "{}"]

[h: macro.return = oRuneSet]