[h: oToken = json.get(macro.args,"token")]
[h: iArma = json.get(macro.args,"numArma")]
[h: bRemove = json.get(macro.args,"remove")]
[h: sIdMacro = json.get(macro.args,"IDMacro")]

[h: sNomeInc = strformat("IncantamentoArma%{iArma}")]

[h, if(bRemove == 1), code:{
		[eventUninstaller(oToken,"On_Hit",sNomeInc)]
};{
	[sArma = json.get(macro.args,"nomeOggetto")]
	[bFlag = 0]

	[h, if(json.contains(macro.args,"elemento")), code:{
		[sNome = json.get(macro.args,"nomeInc")]
		[sElemento = json.get(macro.args,"elemento")]
		[iLL = json.get(macro.args,"LL")]
		[sDmgBase =	json.get(macro.args,"dannoBase")]
		[sDmgLP = json.get(macro.args,"dannoLP")]
	};{
		[sInputNome = "sNome|Incantamento Elementale|Nome"]
		[sInputElemento = "sElemento|Acqua,Aria,Fuoco,Terra,Arcano,Mentale,Negativo,Positivo|Elemento|LIST|value=string"]
		[sInputLL = "iLL|1|LL"]
		[sInputDmgBase = "sDmgBase|0|Danno Base"]
		[sInputDmgLP = "sDmgLP|0|Danno per LP"]
		[bCheck = input(sInputNome,sInputElemento,sInputLL,sInputDmgBase,sInputDmgLP)]
		[assert(bCheck,"Operazione Annullata")]
		[bFlag = 1]
	}]
	
	[oParam = json.set("","elemento",sElemento,"nomeInc",sNome,"LL",iLL,"dannoBase",sDmgBase,"dannoLP",sDmgLP)]
	[if(bFlag), code:{
		[macro("items/addWeaponMacroParams@this"):json.append(oToken,sArma,sIdMacro,oParam)]
	}]
	[oParam = json.set(oParam,"arma",iArma)]

	[eventInstaller(oToken,"On_Hit",sNomeInc,"items/eventDannoElementale@lib:it.aldinucci.piero.bed.maptool.ruleset",oParam)]
}]
