[h: source = arg(0)]

[h: switchToken(source)]

[macro("combat/getCostoPA@this"):json.set("","source",source,"arma",1)]
[h: armaPA1 = macro.return]

[macro("mobs/getNomeArma@this"): json.append(source,1)]
[h: arma1 = macro.return]
[h: iPortata1 = getPortataArma(source,1)]
[h: velA1 = getAttackTime(source,0,1)]
[macro("combat/isStile2A@this"):source]
[h: checkS = macro.return || isArmaLancioEquipped(source)]

[h: arrayTabella = ""]
[h: iCrit = getCrit(source,1)]
[h: fProbCrit1 = round(getCritProb(iCrit)*100,1)]

[h: firstC = "Nome,Danni,LA,Penetrazione,Critico,Pot. Critico,LA Spalle,Tempo Attacco,Portata,PA Attacco"]
[h, macro("gui/dmgTypeIcons@this"): json.append(Tipo_Danno_Arma1, 18)]
[h: sDArma1 = strformat("%s %s",replace(string(Danno_Arma1),",","+"), macro.return)]
[h: iArmaPA = getArmaPA(json.set("","source", source, "arma", 1))]
[h: secondC = strformat("%{arma1},%{sDArma1},%d,%d,<span title='%{iCrit}'>%{fProbCrit1}%%</span>,%d%%,&nbsp;%+d,%{velA1},%{iPortata1},%{iArmaPA}",getLA(source,1), getPenetrazione(source,1),getPCrit(source,1)+100,getLASpalle(source,1))]

[h, if(checkS), code:{
	[macro("mobs/getNomeArma@this"): json.append(source,2)]
	[h: arma2 = macro.return]
	[h: velA2 = getAttackTime(source,0,2)]
	[h: iPortata2 = getPortataArma(source,2)]
	[h, macro("gui/dmgTypeIcons@this"): json.append(Tipo_Danno_Arma2, 18)]
	[h: sDArma2 = strformat("%s %s",replace(string(Danno_Arma2),",","+"), macro.return)]
	[iCrit2 = getCrit(source,2)]
	[fProbCrit2 = round(getCritProb(iCrit2)*100,1)]
	[h: iArmaPA2 = getArmaPA(json.set("","source", source, "arma", 2))]
	[thirdC = strformat("%{arma2},%{sDArma2},%d,%d,<span title='%{iCrit2}'>%{fProbCrit2}%%</span>,%d%%,&nbsp;%+d,%{velA2},%{iPortata2},%{iArmaPA2}",getLA(source,2), getPenetrazione(source,2),getPCrit(source,2)+100,getLASpalle(source,2))]
	[h: colSpan = 2]
	[h: tableHead = "<th> Arma 2</th>"]
};{
	[thirdC =""]
	[h: colSpan = 1]
	[h: tableHead = ""]
}]


[h: len = listCount(firstC)]
[h, for(i,0,len,1),code:{
	[h: element = json.set("","value",listGet(firstC,i),"opzioni","class='description'")]
	[h: arrayRiga = json.append("",element)]
	[h: element = json.set("","value",listGet(secondC,i),"opzioni","class='table-data'")]
	[h: arrayRiga = json.append(arrayRiga,element)]
	[if(thirdC != ""), code:{
		[h: element = json.set("","value",listGet(thirdC,i),"opzioni","class='table-data'")]
		[h: arrayRiga = json.append(arrayRiga,element)]
	}]
	[h: arrayTabella = json.append(arrayTabella,arrayRiga)]
}]

[h: element = json.set("","value","Vel. Azioni","opzioni","class='description'")]
[h: arrayRiga = json.append("",element)]
[h: element = json.set("","value",getVA(source),"opzioni","colspan="+colSpan+" class='table-data'")]
[h: arrayRiga = json.append(arrayRiga,element)]
[h: arrayTabella = json.append(arrayTabella,arrayRiga)]

[h: element = json.set("","value","Mancare","opzioni","class='description'")]
[h: arrayRiga = json.append("",element)]
[h: element = json.set("","value",strformat("%s%%",round(getMancareProb(getMancare(source))*100,1)),"opzioni","colspan="+colSpan+" class='table-data'")]
[h: arrayRiga = json.append(arrayRiga,element)]
[h: arrayTabella = json.append(arrayTabella,arrayRiga)]

[h: element = json.set("","value","Stile","opzioni","class='description'")]
[h: arrayRiga = json.append("",element)]
[h: oParam = json.set("","source",source,"frameName","Scheda","Stili",1)]
[h: sLink = macrolinkText("gui/changeConfig@this","none",oParam)]
[macro("combat/getStile@this"):source]
[h: sStile = strformat("<a href='%{sLink}'>%{macro.return}</a>")]
[h: element = json.set("","value",sStile,"opzioni","colspan="+colSpan)]
[h: arrayRiga = json.append(arrayRiga,element)]
[h: arrayTabella = json.append(arrayTabella,arrayRiga)]

[macro("combat/isStileAS@this"): source]
[h, if(macro.return), code:{
	[h: element = json.set("","value","Scudo","opzioni","class='description'")]
	[h: arrayRiga = json.append("",element)]
	[macro("mobs/getScudo@this"): source]
	[h: element = json.set("","value",json.get(macro.return,"nome"),"opzioni","colspan="+colSpan)]
	[h: arrayRiga = json.append(arrayRiga,element)]
	[h: arrayTabella = json.append(arrayTabella,arrayRiga)]
}]

[h: macro.return = arrayTabella]