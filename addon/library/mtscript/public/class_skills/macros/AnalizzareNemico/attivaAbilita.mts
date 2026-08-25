[h: source = macro.args]
[h: target = getSelected()]

[h, if(listCount(target) != 1), code:{
	[h: appendMessaggio(source,"strAbilitaAttivata","Devi selezionare un solo bersaglio")]
	[return(0,1)]
}]

[h: sNomeAb = "AnalizzareNemico"]
[h: iAbLiv = getLivelloAbilita(source, sNomeAb)]
[h: iRoll = roll(1,20)]
[h: iMod = iAbLiv*2 + getProperty("Livello", source)]
[h: iCD = 12 + getProperty("Livello", target)]
[h, if(iRoll + iMod < iCD), code:{
	[h: appendMessaggio(source,"strAbilitaAttivata",strformat("Tiro analisi <span style='color:red' title='1d20 (%{iRoll}) + %{iMod} &rarr %d &lt; %{iCD}'>fallito</span>", iRoll + iMod))]
	[return(0,0)]
}]

[h: bInput = input("sStat|Res. Acqua,Res. Aria,Res. Fuoco,Res. Terra,Res. Arcana,Res. Mente,Res. Negativa,Res. Positiva,Res. Fisica,LD Taglio,LD Botta,LD Punta|Caratteristica|RADIO|VALUE=STRING SPAN=TRUE")]

[h, if(!bInput): return(0,1)]

[h:sMsg = strformat("<span style='color:green' title='1d20 (%{iRoll}) + %{iMod} &rarr %d &ge; %{iCD}'>Successo</span>", iRoll + iMod)]
[h, switch(sStat), code:
	case "Res. Acqua":{
		[discoverResistenzaBersaglio("Acqua", source, target, json.set("", "isElement", 1))]
	};
	case "Res. Aria":{
		[discoverResistenzaBersaglio("Aria", source, target, json.set("", "isElement", 1))]
	};
	case "Res. Fuoco":{
		[discoverResistenzaBersaglio("Fuoco", source, target, json.set("", "isElement", 1))]
	};
	case "Res. Terra":{
		[discoverResistenzaBersaglio("Terra", source, target, json.set("", "isElement", 1))]
	};
	case "Res. Arcana":{
		[discoverResistenzaBersaglio("Arcano", source, target, json.set("", "isElement", 1))]
	};
	case "Res. Mente":{
		[discoverResistenzaBersaglio("Mentale", source, target, json.set("", "isElement", 1))]
	};
	case "Res. Negativa":{
		[discoverResistenzaBersaglio("Negativo", source, target, json.set("", "isElement", 1))]
	};
	case "Res. Positiva":{
		[discoverResistenzaBersaglio("Positivo", source, target, json.set("", "isElement", 1))]
	};
	case "Res. Fisica":{
		[discoverResistenzaBersaglio("Fisico", source, target, json.set("", "isElement", 1))]
	};
	case "LD Taglio":{
		[macro("combat/discoverTargetLDSheet@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(target, "T")]
	};
	case "LD Botta":{
		[macro("combat/discoverTargetLDSheet@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(target, "B")]
	};
	case "LD Punta":{
		[macro("combat/discoverTargetLDSheet@lib:it.aldinucci.piero.bed.maptool.ruleset"): json.append(target, "P")]		
	};	
	default:{
		[sMsg = "Something wrong happened: default value used"]
}]

[h: appendMessaggio(source,"strAbilitaAttivata", sMsg)]
[h: macro.return = 0]