<!-- DEPRECATED - must be removed or updated to static data ->
[h: sId = "ELMO DELLUMILTA-1"]
[h: sTable = "elmo_Json"]
[h: sDescr = "Questo elmo ha una descrizione a caso per vedere se funziona"]

[h: oTable = getLibProperty(sTable,getMacroLocation())]
[h: oItem = json.get(oTable,sId)]
[h: oItem = json.set(oItem,"descrizione",sDescr)]
[h: oTable = json.set(oTable,sId,oItem)]
[h: setLibProperty(sTable,oTable,getMacroLocation())]