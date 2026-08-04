[h: oToken = arg(0)]
[h: sLibName = arg(1)]

[h: iLiv = getLivelloAbilita(oToken, "MedleyImprovvisato")]

[h: iChance = iLiv * 25]
[h: iRoll = roll(1,100)]
[h, if(iRoll + iChance <= 100): return(0,"")]

<!-- Scegli il motivo - MACRO MANCANTE e DA FARE/FINITE-->
[macro("class_skills/getRandomEffettoSonata@this"): json.append(source)] <!-- Questo non esiste ancora -->
<!-- questa è un'alternativa -->
[h, macro("class_skills/getMotiviConosciuti@this"): oToken]
[h: aMotiviConosciuti = macro.return]
[h: iMotivoScelto = roll(1, json.length(aMotiviConosciuti))-1]
[h: aMotivoScelto = json.get(aMotiviConosciuti, iMotivoScelto)]


<!-- Applica Qua l'effetto del medley -->
[h, macro("class_skills/getDurataAbilita@this"): json.append(oToken, sLibName)]
[h: iDurata = macro.return]
[macro("class_skills/createEffettoSonata@this"): json.append(aMotivoScelto,"ALLEATI")]
[h: oEffetto = json.set(macro.return,"source",oToken, "target", oToken, "effetto", "Ispirazione Bardica", "durata", iDurata, "tipo" , "NASCOSTO")]
[macro("core/ApplyEffect@this"):oEffetto]

[h: macro.return = ""]
