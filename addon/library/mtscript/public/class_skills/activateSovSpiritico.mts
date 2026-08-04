[h: oToken = arg(0)]

[h, macro("class_skills/isSovSpiriticoActive@this"): oToken]
[h, if(macro.return != 1): return(0,json.append(0, ""))]

[h: sSpirito = getSpiritoAttivo(oToken)]
[h, if(sSpirito == ""): return(0, json.append(0, "Nessuno Spirito Attivo"))]

[h, macro("powers/loseDevozioneWrapper@this"): json.append(oToken, sSpirito)]
