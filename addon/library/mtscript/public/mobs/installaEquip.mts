[h: oToken = arg(0)]
[h: oDatiCustom = arg(1)]

[h: sCat = json.get(oDatiCustom,"categoria")]
[h: sIdDB = json.get(oDatiCustom,"idDB")]
[h: oOggetto = getOggettoFromDB(sIdDB, sCat)]
[h: sRuneTag = "RuneInstallate"]
[h: aRune = json.get(oOggetto, sRuneTag)]
[h: i = 0]
[h: jRune = "{}"]
[h, foreach(sRuna, aRune), code: {
	[i = i +1]
	[macro("consumables/getRunaFromDB@this"): sRuna]
	[jRuna = macro.return]
	[h: iLivRuna = json.get(jRuna,"livello")]
	[if(!isNumber(iLivRuna)): iLivRuna = Inserisci_Livello_Runa]
	[jRuna = json.set(jRuna,"livello", iLivRuna)]
	[jRune = json.set(jRune, string(i), jRuna)]
}]

[h: jDatiCustom = json.set("", sRuneTag, jRune)]
[h: oDatiCustom = json.set(oDatiCustom, "datiCustom", jDatiCustom)]
[h, switch(sCat), code:
	case "arma":{
		[macro("mobs/installaArma@this"): json.append(oToken,sIdDB,oDatiCustom)]
	};
	case "armatura":{
		[macro("mobs/installaArmatura@this"): json.append(oToken,sIdDB,oDatiCustom)]		
	};
	case "scudo":{
		[macro("mobs/installaScudo@this"): json.append(oToken,sIdDB,oDatiCustom)]
	};
	default:{
		[macro("mobs/installaAccessorio@this"): json.append(oToken,sIdDB,sCat,oDatiCustom)]
	}
]
<!-- le macro sopra ritornano l'id locale dell'oggetto isntallato -->