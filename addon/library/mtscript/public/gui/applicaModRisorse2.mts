[h: target = json.get(macro.args,"target")]
[h: isGM = json.get(macro.args,"GM")]

[r, if(json.contains(macro.args,"Azzera") == 1), code:{
	[macro("gui/ResourcesFrame@this"):target]
};{
	[h: dannoVita = eval(string(json.get(macro.args,"dannoVita")))]
	[h: curaVita = eval(string(json.get(macro.args,"curaVita")))]
	[h: dannoFatica = eval(string(json.get(macro.args,"dannoFatica")))]
	[h: curaFatica = eval(string(json.get(macro.args,"curaFatica")))]
	[h: dannoMana = eval(string(json.get(macro.args,"dannoMana")))]
	[h: curaMana = eval(string(json.get(macro.args,"curaMana")))]
	[h: dannoPA = eval(string(json.get(macro.args,"dannoPA")))]
	[h: curaPA = eval(string(json.get(macro.args,"curaPA")))]
	[h: dannoMM = eval(string(json.get(macro.args,"dannoMM")))]
	[h: curaMM = eval(string(json.get(macro.args,"curaMM")))]


	[h: modVita = curaVita-dannoVita]
	[h, if(modVita < 0), code:{
		[macro("core/DannoTarget@this"):json.append("",target,-modVita)]
	}]
	[h, if(modVita > 0), code:{
		[macro("core/CuraTarget@this"):json.append("",target,modVita)]
	}]

	[h: modMana = curaMana - dannoMana]
	[r, if(modMana != 0), code:{
		[macro("utility/modMinMax@this"): json.set("","target",target,"statToMod","Mana","maxStat","Mana_Max","modValue",modMana)]
		[macro("utility/annunciaModificaStat@this"): json.set("","target",target,"colore","blue","nome","Punti Mana","valore",macro.return)]
	};{}]

	[h: modFatica = curaFatica - dannoFatica]
	[r, if(modFatica != 0), code:{
		[macro("utility/modMinMax@this"): json.set("","target",target,"statToMod","PF","maxStat","PF_Max","modValue",modFatica)]
		[macro("utility/annunciaModificaStat@this"): json.set("","target",target,"colore","orange","nome","Punti Fatica","valore",macro.return)]
	};{}]


	[h: switchToken(target)]
	[h, if((dannoPA > 0) || (isGM==1)), code:{
		[h: PA = PA - dannoPA+curaPA]
	}]
	
	[h, if((dannoMM > 0) || (isGM == 1)), code:{
		[h: MM = MM - dannoMM+curaMM]
	}]
	
	[macro("utility/updateBars@this"):target]

	
}]

