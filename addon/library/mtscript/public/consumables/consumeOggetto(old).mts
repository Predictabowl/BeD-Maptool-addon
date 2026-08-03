[h: source = json.get(macro.args,"source")]
<!-- Opzione 1 Oggetto Veloce -->
[h: iOggetto = json.get(macro.args,"indiceOggetto")]
<!-- Opzione 2 Runa -->
[h: iArma = json.get(macro.args,"numArma")]
[h, if(!isNumber(iArma)): iArma = 1]
[h: iRuna = json.get(macro.args,"numRuna")]
[h, if(!isNumber(iRuna)): iRuna = 1]




[h, if(isNumber(iOggetto)), code:{
	[removeFromSlotVeloce(source,iOggetto)]
};{
	[macro("consumables/modCaricheRuna@this"): json.append(source,sArma,iRuna)]
	[h: oOggetto = macro.return]
	[macro("consumables/getInfoRuna@this"):oRuna]
	[h: objInfo = macro.return]
	[h: macroParam = json.set("","nomeArma",sArma,"numRuna",iRuna)]
}]