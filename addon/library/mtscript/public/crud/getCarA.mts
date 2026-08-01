[h: oToken = arg(0)]
[h: sCarArma = arg(1)]

[h: switchToken(oToken)]

[h, if(json.type(sCarArma) == "OBJECT"), code:{
	[if(json.contains(sCarArma,"carArma")): 
		sCarArma = json.get(sCarArma,"carArma");
		return(0, CarA_backup)]
}]

[h, switch(sCarArma), code:
case "Massiccia":{
	[iReturn = Forza]
};
case "Agile":{
	[iReturn = Destrezza]
};
case "CaP":{
	[iReturn = getCarP(oToken)]
};
case "Bilanciata":{
	[iReturn = getCarCombinata(oToken,"Forza","Destrezza")]
};
default:{
	[iReturn = CarA_backup]
}]

[h: macro.return = iReturn]