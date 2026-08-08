[h: target = arg(0)]
[h: nomeLib = arg(1)]
[h, if(argCount()>2) : jOptions = arg(2); jOptions = "{}"]

[h, if(json.get(jOptions, "hideNames") != 1): bNames = 1; bNames = 0]
[h: iRecupero = json.get(jOptions, "recupero")]
[h, if(!isNumber(iRecupero)): iRecupero = -1]

[h: sNome = fetchSpellProp(nomeLib,"nome_decorativo")]	
[h, macro("gui/getSpellStats@this"): json.append("",target,nomeLib)]
[h: iManaCost =json.get( macro.return,0)]
[h: iPFCost =json.get( macro.return,1)]
[h: iPACost =json.get( macro.return,2)]
[h: iTempoCost =json.get( macro.return,3)]

[h, macro("powers/getSpellRecuperoStat@this"): nomeLib]
[h: bRecupero = macro.return]

[h: imgA = fetchSpellImage(nomeLib)]
[h: strCast = strformat("<input type='image' class='spellCastButton' src='%{imgA}' onclick='loadParams(this)'")]
[h, if(bNames): sIconTitle = "Lancia Potere"; sIconTitle = sNome]
[h: strCast = strformat('%{strCast} data-macro="gui/iniziaSpellCastWrapper@this" data-spellName="%{nomeLib}" title="%{sIconTitle}"/>')]
[h, if(iRecupero > 0 && bRecupero > 0): strCast = strformat("<span class='recupero-container'>%{strCast}<div class='recupero-overlay'>%d</div></span>", iRecupero)]
[h: sSpellType = fetchSpellProp(nomeLib,"tipo")]

[h: sJScriptSpell = strformat('apri_dialog_descrizione("%{nomeLib}")')]
[h, if(bNames), code:{
	[h: sReturn = strformat("<td>%{strCast}</td>")]
	[sReturn = strformat("%{sReturn}<td class = '%{sSpellType} spellFont' title='Leggi descrizione' onclick='%{sJScriptSpell}'>%{sNome}</td>")]
};{
	[h: sReturn = strformat("<td class = '%{sSpellType}'>%{strCast}</td>")]
}]
[h: sReturn = strformat("%{sReturn}<td class='manaFont'> %{iManaCost} </td>
<td class='faticaFont'> %{iPFCost} </td>
<td class='ppFont'> %{iPACost} </td>
<td class='tempoFont'> %{iTempoCost} </td>
")]

[h: return(0,sReturn)]