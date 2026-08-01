[h: aData = "[]"]
[h: aData = json.append(aData,"PV_Max","Mana_Max","PF_Max")]
[h: aData = json.append(aData,"LA","Crit","PCrit")]
[h: aData = json.append(aData,"TS_Tem","TS_Rif","TS_Vol")]

[h: broadcast(strformat("Not implemented yet: %s@%s",geTMacroName(), getMAcroLocation()))]
[h: macro.return = aData]