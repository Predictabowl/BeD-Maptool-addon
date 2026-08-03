[h: oToken = arg(0)]
[h: sArma = arg(1)]
[h: oRuna = arg(2)]
[h, if(argCount()>3): iNumRuna = arg(3); iNumRuna = 1]

[h: oArma =getArmaCustomData(oToken,sArma)]

[h: oRuneSet = json.get(oArma,"RuneInstallate")]
[h, if(json.type(oRuneSet) != "OBJECT"): oRuneSet = "{}"]
[h: sID = string(iNumRuna)]
[h: oRuneSet = json.set(oRuneSet,sID,oRuna)]
[h: oArma = json.set(oArma,"RuneInstallate",oRuneSet)]
[macro("mobs/setArmaCustomData@this"):json.append("",oToken,sArma,oArma)]