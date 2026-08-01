<!-- Pericoloso non effettua alcun controllo -->
[h: oToken = json.get(macro.args,0)]
[h: sTipo = json.get(macro.args,1)]
[h: nomeEvento = json.get(macro.args,2)]
[h: oEvento = json.get(macro.args,3)]

[h: listaEventi = getProperty(sTipo,oToken)]
[h: listaEventi = json.set(listaEventi,nomeEvento,oEvento)]
[h: setProperty(sTipo,listaEventi,oToken)]