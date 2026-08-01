[h: oToken = arg(0)]
[h: sVista = arg(1)]

[macro("mobs/getVistePossedute@this"): oToken]
[h: aViste = macro.return]
[h: iIndex = json.indexOf(aViste,sVista)]
[h, if(iIndex >= 0), code:{
	[aViste = json.remove(aViste,iIndex)]	 
	[setInMemoria(oToken,"VisteDisponibili",aViste)]
}]
