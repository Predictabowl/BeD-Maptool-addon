[h: source = json.get(macro.args,"source")]
[h: target = json.get(macro.args,"target")]
[h: sNomeAb = json.get(macro.args,"nomeAbilita")]

[macro("class-skills/getAbilitaPassiva@this"): sNomeAb]
[h: oAbilita = macro.return]
[h: sFluff = json.get(oAbilita,"nomeDecorativo")]
[h: iLiv = getLivelloAbilita(source,sNomeAb)]
[h: iProb = 10*iLiv]
[h: iRoll = 1d100+iProb]

[sMsg = strformat("<br>%{sFluff}: <span title='1d100 +%{iProb} = %{iRoll}'>")]

[h, if(iRoll > 100), code:{
	[macro("powers/modAnime@this"): json.append(source,1)]
	[sMsg = strformat("%{sMsg}%s ha guadagnato 1 frammento d'anima</span>",getName(source))]
};{
	[sMsg = strformat("%{sMsg}tentativo fallito</span>",getName(source))]
}]

[macro.return = sMsg]