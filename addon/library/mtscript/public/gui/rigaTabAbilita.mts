[h: target = json.get(macro.args,0)]
[h: sLibAbilita = json.get(macro.args,1)]

[h: oAbParam = macro.args]

[h: sRiga= ""]
[macro("gui/isAbilitaNascosta@this"): oAbParam]
[h, if(macro.return): return(0,"")]


[h: sTipo = upper(getLibProperty("tipo",sLibAbilita))]
[h: sNome = getLibProperty("nome_decorativo",sLibAbilita)]
[macro("class_skills/isAbilitaInUso@this"): oAbParam]
[h: sInUso = macro.return]
[macro("class_skills/getAutocastAbilita@this"): oAbParam]
[h: bAutocast = macro.return]


[h: sImage = fetchClassSkillImage(sLibAbilita)]
[h: sFluff = strformat("<img src='%{sImage}' class='spellCastButton' title='Attiva/Disattiva Abilità'/>")]
[h: jSCall = strformat('pulsanteAttivaAbilita(event,"%s")',sLibAbilita)]
[h: sMacroL = strformat("<a href='#' onmouseup='%s' class='spellCast'>%{sFluff}</a>", jScall)]

[h, switch(sTipo), code:
case "ATTIVA":{
	[classType = "AbAttiva"]
};
case "EROICA":{
	[classType = "AbEroica"]
};
case "PECULIARE":{
	[classType = "AbPeculiare"]
};
case "PASSIVA":{
	[classType = "AbPassiva"]
	[sMacroL = ""]
	[sInUso = ""]
	[sMacroDis = ""]
};
default:{
	[classType = ""]
}]

[h, if(sInUso): sAttiva = "abilitaOn"; sAttiva=""]
[h, if(bAutocast): sAutocast = "abilitaAutocast"; sAutocast = ""]
[h: sActive = strformat("class='%s %s'", sAttiva, sAutocast)]
[macro("class_skills/getAbilitaPF@this"): json.append(target,sLibAbilita)]
[h: iPF = macro.return]
[macro("class_skills/getAbilitaPA@this"): json.append(target,sLibAbilita)]
[h: iPA = macro.return]
[macro("class_skills/getAbilitaPP@this"): json.append(target,sLibAbilita)]
[h: iPP = macro.return]
[macro("class_skills/getAbilitaMM@this"): json.append(target,sLibAbilita)]
[h: iMM = macro.return]

[h: sJScriptParam = strformat('"%{sLibAbilita}"')]

[h: sRiga = strformat("<td %{sActive}>%{sMacroL}</td><td align='left' class='%{classType} spellFont' title='Leggi descrizione'onclick='apri_dialog_descrizione(%{sJScriptParam})'>%{sNome}</td>")]
[h, if(sTipo != "EROICA"): sRiga = strformat("%{sRiga}<td class='faticaFont'>%{iPF}</td><td class='azioneFont'>%{iPA}</td><td class='ppFont'>%{iPP}</td><td class='mmFont'>%{iMM}</td>")]

[h: macro.return = sRiga]