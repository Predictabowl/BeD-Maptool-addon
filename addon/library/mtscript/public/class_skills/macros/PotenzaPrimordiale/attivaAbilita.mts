[h: source = macro.args]

[h: libName = "PotenzaPrimordiale"]

[h: iLiv = getLivelloAbilita(source, libName)]
[h: fMod = 0.7 +0.16*iLiv]

[h: bCheck = input("sChoice| MDI,MCG,MCR|Scegli bonus|RADIO|VALUE=STRING")]
[h, if(!bCheck): sChoice = "MDI"]

[h, switch(sChoice), code:
	case "MCG":{
		[sCar = "Mod_Cura_Out"]
	};
	case "MCR":{
		[sCar = "Mod_Cura_In"]
	};
	default:{
		[sCar = "Mod_Danno_Out"]
	}
]

[h: fVal = getProperty(sCar, source)]
[h: fVal = fVal + fMod]
[h: setProperty(sCar, fVal, source)]
[h: setInMemoria(source, libName, json.append(sCar, fMod))]

[macro("powers/rollDevozioneSpirito@lib:it.aldinucci.piero.bed.maptool.ruleset"):source]
[h: oOwners = getOwners("json",source)]
[h: oOwners = json.append(oOwners,"gm")]
[h: broadcast(json.get(macro.return,1),oOwners)]

[h: appendMessaggio(source,"strAbilitaAttivata",strformat("%+d %{sChoice}", floor(fVal*100)))]
[h: macro.return = 0]