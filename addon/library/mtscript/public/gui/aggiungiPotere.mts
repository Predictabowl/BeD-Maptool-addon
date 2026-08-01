[h: target = json.get(macro.args,"target")]

[h: variabili = input ("sNome|0|Nome","iMana|0|Costo Mana","iPF|0|Costo PF","iPA|0|Costo PA","iTempo|0|Tempo di Lancio")]
[h: assert(variabili == 1,"Operazione Annullata")]

[h: list = getProperty("Poteri_Mem",target)]
[h: dati = json.set("","mana",iMana,"PF",iPF,"PA",iPA,"tempo",iTempo)]
[h: list = json.set(list,sNome,dati)]
[h: setProperty("Poteri_Mem",list,target)]

[macro("gui/listaPoteriMem@this"):target]