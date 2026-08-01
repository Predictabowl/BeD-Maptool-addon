[h: oSpawner = json.get(macro.args,0)]
[h: oOwner = json.get(macro.args,1)]

[h: oLista_Dati = getProperty("Lista_Dati",oSpawner)]
[h: oLista_Dati = setStrProp(oLista_Dati,"Padrone",oOwner)]
[h: setProperty("Lista_Dati",oLista_Dati,oSpawner)]
