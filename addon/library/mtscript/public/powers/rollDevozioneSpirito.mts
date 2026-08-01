[h, if(json.type(macro.args) == "ARRAY"), code:{
	[h: oToken = json.get(macro.args,0)]
	[sSpirito = json.get(macro.args,1)]
};{
	[oToken = arg(0)]
	[sSpirito = getSpiritoAttivo(oToken)]
}]

[h: switchToken(oToken)]
[h: iModSkill = getLivelloAbilita(oToken, "PlacareGliSpiriti")]
[macro("powers/getModRichiamoSpirito@this"): json.append(oToken,sSpirito)]
[h: iModDev = macro.return]
[h: iModCar = getCarP(oToken)-5]
[h: iRoll = 1d20]
[h: iStatMod = popStatModifier(oToken,"modRollDevozione")]
[h: iCD = 15]
[h: iTot = iRoll +iModCar +iModSkill +iStatMod]
[h: sMsg = strformat("Tiro incremento Mod. Devozione spirito [%{sSpirito}]: <span title='%{iRoll}'>1d20</span><span title='Mod. Car. Mana'>%+d</span>",iModCar)]
[h, if(iModSkill > 0): sMsg = strformat("%{sMsg}<span title='Modificatore di Classe'>%+d</span>",iModSkill)]
[h, if(iStatMod > 0): sMsg = strformat("%{sMsg}<span title='Altri modificatori'>%+d</span>",iStatMod)]
[h: sMsg = strformat("%{sMsg}= <b>%{iTot}</b> (CD: %{iCD})")]
[h, if(iTot>=iCD), code:{
	[sMsg = strformat("%{sMsg} <span style='color:green'>Successo</span>")]
	[macro("powers/modDevozioneSpirito@this"): json.append(oToken,sSpirito,1)]
	[bResult = 1]
};{
	[sMsg = strformat("%{sMsg} <span style='color:red'>Fallimento</span>")]
	[bResult = 0]
}]

[h: macro.return = json.append(bResult,sMsg)]