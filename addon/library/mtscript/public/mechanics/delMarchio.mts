[h: oToken = json.get(macro.args,0)]
[h: sTipo = upper(json.get(macro.args,1))]

[h: oMarchi = getProperty ("Marchi",oToken)]
[h, if(json.type(oMarchi) != "OBJECT"), code:{
	[oMarchi = "{}"]
};{
	[oMarchi = json.remove(oMarchi,sTipo)]
}]

<!-- questo if è codice di sicurezza, serve ad essere sicuri che il setup di un marchio
avvenga sempre, normalmente viene effettuato in un evento di Fine Azione, qua viene 
ripetuto quando si cancella il marchio per i casi in cui i marchi vengano chiamati senza
la normale procedura delle azioni -->

[h, if(sTipo == "PROPRIETARIO"), code:{
	[macro("mechanics/eventFinishSetup@this"): json.set("","source",oToken)]
}]

[h: setProperty("Marchi",oMarchi,oToken)]
