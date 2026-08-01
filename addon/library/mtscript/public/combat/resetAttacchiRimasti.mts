[h: target = arg(0)]

[h: switchToken(target)]

[macro("combat/getNumAttacchi@this"): target]
[h: Att_Rimanenti = json.get(macro.return,0) + json.get(macro.return,1)]
[h: Att_Opp_Rimanenti = json.get(macro.return,2) + json.get(macro.return,3)]
[h: Lista_Dati = deleteStrProp(Lista_Dati,"UltimaArmaUsata")]