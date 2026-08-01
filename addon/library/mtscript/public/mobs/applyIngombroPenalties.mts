[h: oToken = arg(0)]

[h:switchToken(oToken)]
[h: sTag = "ingombroData"]
[h: jData = getDaMemoria(oToken,sTag)]

[h, if(json.isEmpty(jData)): iOldOverIng = 0; iOldOverIng = json.get(jData,"savedIngombro")]

[h: iCarico = getCarico(oToken)]
[h: iIng = getIngombroTotale(oToken)]
[h: iOverIng = max(0,iIng-iCarico)]


[h: iDelta = iOldOverIng-iOverIng]
[h: Schivare = Schivare +iDelta]
[h: Parare = Parare +iDelta]
[h: VA = VA + iDelta*2]

[h: iDelta1Old = floor((iOldOverIng+1)/2)]
[h: iDelta1 = iDelta1Old - floor((iOverIng+1)/2)]
[h: Acrobazia = Acrobazia + iDelta1]
[h: Atletica = Atletica + iDelta1]
[h: Furtivita = Furtivita + iDelta1]
[h: Lotta = Lotta + iDelta1]
[h: Manualita = Manualita + iDelta1]
[h: Autorita = Autorita + iDelta1]


[h: iDelta2Old = floor(iOldOverIng/2)]
[h: iDelta2 = iDelta2Old - floor(iOverIng/2)]
[h: MM_MAX = MM_MAX + iDelta2]

[h: jData = json.set("","savedIngombro",iOverIng)]
[h: setInMemoria(oToken,sTag,jData)]
