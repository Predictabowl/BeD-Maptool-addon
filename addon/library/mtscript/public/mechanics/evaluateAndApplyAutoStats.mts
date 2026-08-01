[h: oToken = arg(0)]

[h: switchToken(oToken)]

[macro("mechanics/getOriginalStats@this"): oToken]
[h: oData = macro.return]

[h: iTSBase = floor(Livello/3)]
[h: TS_Tem = iTSBase + json.get(oData,"TS_Tem")]
[h: TS_Rif = iTSBase + json.get(oData,"TS_Rif")]
[h: TS_Vol = iTSBase + json.get(oData,"TS_Vol")]

[h: PV_Max = json.get(oData,"PV_Max")]
[h: PF_Max = json.get(oData,"PF_Max")]
[h: Mana_Max = json.get(oData,"Mana_Max")]