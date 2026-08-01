[h: oToken = arg(0)]
[h: sVista = arg(1)]

[macro("mobs/getVistePossedute@this"): oToken]
[h: aViste = json.append(macro.return,sVista)]]

[h: setInMemoria(oToken,"VisteDisponibili",aViste)]