<!-- Questo è pericoloso. mette un effetto senza fare nessun controllo o attivazione-->
[h: token = arg(0)]
[h: sEffect = arg(1)]
[h: oEffect = arg(2)]

[h:switchToken(token)]
[h, if(json.type(Lista_Effetti ) != "OBJECT"): Lista_Effetti = "{}"]
[h: Lista_Effetti = json.set(Lista_Effetti,sEffect,oEffect)]