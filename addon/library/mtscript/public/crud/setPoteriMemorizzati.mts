[h: oToken = arg(0)]
[h: aPoteri = arg(1)]

[h, if(json.type(aPoteri) != "ARRAY"): aPoteri = json.fromList(aPoteri)]

[h: aPoteri = json.unique(aPoteri)]
[h: setProperty("Poteri_Mem",aPoteri,oToken)]