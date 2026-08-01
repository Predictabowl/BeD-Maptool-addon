[h: source = json.get(macro.args,0)]
[h: sFrame = "Scheda"]
[h, if(json.length(macro.args) > 1), code:{
	[sTemp = json.get(macro.args,1)]
	[if(startsWith(sTemp,sFrame)): sFrame = sTemp; sFrame = strformat("%{sFrame}%{sTemp}")]
}]


[h:target = getSelected()]
[macro("gui/getFakeLAMod@this"):source]
[h: fakeLAMod =macro.return]
[h: switchToken(source)]
[macro("combat/getNumAttacchi@this"):source]
[h: numA1 = json.get(macro.return,0)]
[h: numA2 = json.get(macro.return,1)]

[macro("combat/getCostoPA@this"):json.set("","source",source,"arma",1)]
[h: armaPA1 = macro.return]

[h: spellTime1 = getSpellTimeMod(source,1)]
[macro("mobs/getNomeArmaEquip@this"): json.append(source,1)]
[h: arma1 = macro.return]
[macro("combat/getGittataArma@this"): json.append(source,1)]
[h: iPortata1 = macro.return]
[h: velA1 = getAttackTime(source,0,1)]
[macro("combat/isStile2A@this"):source]
[h: checkS = macro.return]

[h: arrayTabella = ""]

[h: firstC = "Nome,Danni,LA,Crit,PCrit,LA Spalle,Tempo Attacco,Costo PA,Portata, Num. Attacchi, Tempo di Lancio"]
[h: sDArma1 = replace(string(Danno_Arma1),",","+"))]
[h: secondC = strformat("%{arma1},%{sDArma1},%{LA1},%{Crit1},%{PCrit1},&nbsp;%+d,%{velA1},%{armaPA1},%{iPortata1},%{numA1},%{spellTime1}",LA_Spalle)]

[h, if(checkS), code:{
	[macro("mobs/getNomeArmaEquip@this"): json.append(source,2)]
	[h: arma2 = macro.return]
	[h: velA2 = getAttackTime(source,0,2)]
	[macro("combat/getCostoPA@this"):json.set("","source",source,"arma",2)]
	[h: armaPA2 = macro.return]
	[macro("combat/getGittataArma@this"): json.append(source,2)]
	[h: iPortata2 = macro.return]
	[h: spellTime2 = getSpellTimeMod(source,2)]
	[h: sDArma2 = replace(string(Danno_Arma2),",","+"))]
	[thirdC = strformat("%{arma2},%{sDArma2},%{LA2},%{Crit2},%{PCrit2},&nbsp;%+d,%{velA2},%{armaPA2},%{iPortata2},%{numA2},%{spellTime2}",LA_Spalle2)]
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
	[h: element = json.set("","value",listGet(secondC,i))]
	[h: arrayRiga = json.append(arrayRiga,element)]
	[h: element = json.set("","value",listGet(thirdC,i))]
	[h: arrayRiga = json.append(arrayRiga,element)]
	[h: arrayTabella = json.append(arrayTabella,arrayRiga)]
}]

[h: element = json.set("","value","Vel. Azioni","opzioni","class='description'")]
[h: arrayRiga = json.append("",element)]
[h: element = json.set("","value",getVA(source),"opzioni","colspan="+colSpan)]
[h: arrayRiga = json.append(arrayRiga,element)]
[h: arrayTabella = json.append(arrayTabella,arrayRiga)]

[h: element = json.set("","value","Mancare","opzioni","class='description'")]
[h: arrayRiga = json.append("",element)]
[h: element = json.set("","value",Mancare,"opzioni","colspan="+colSpan)]
[h: arrayRiga = json.append(arrayRiga,element)]
[h: arrayTabella = json.append(arrayTabella,arrayRiga)]

[h: element = json.set("","value","Stile","opzioni","class='description'")]
[h: arrayRiga = json.append("",element)]
[macro("combat/getStile@this"):source]
[h: element = json.set("","value",macro.return,"opzioni","colspan="+colSpan)]
[h: arrayRiga = json.append(arrayRiga,element)]
[h: arrayTabella = json.append(arrayTabella,arrayRiga)]


[macro("gui/generaTabellaHTML@this"):arrayTabella]
[h: strTabella = macro.return]

[h: damageTab = ""]
[h: tName = ""]
[h, if(target !=""), code:{
	[if(getPropertyType(target) == "Basic"), code:{
		[h, macro("gui/makeTabellaDmg@this"):json.append(source,target,checkS)]
		[h:damageTab = macro.return]
		[tName = getName(target)]
	}]
}]


[h: list = LMM]
[h: listLen = countStrProp(list)]
[h: classType="evenRow"]
[h: tabellaLL = ""]
[h, for (i,0,listLen,1), code:{
	[h: classType = if(classType=="oddRow","evenRow","oddRow")]

	[h: key = indexKeyStrProp(list,i)]
	[h: valueLMM = getLMM(json.set("","source",source,"scuola",key))]
	[h: valueLL1 = getLL(json.set("","source",source,"scuola",key,"arma",1))]
	[h: valueCD1 = getSpellCD(json.set("","source",source,"LM",valueLMM,"arma",1))]
	[tabellaLL = strformat("%{tabellaLL} <tr class='%{classType}'> <td align='left'>%{key}</td><td>%{valueLMM}</td><td>%{valueLL1}</td><td>%{valueCD1}</td>")]
	[if(checkS == 1), code:{
		[h: valueLL2 = getLL(json.set("","source",source,"scuola",key,"arma",2))]
		[h: valueCD2 = getSpellCD(json.set("","source",source,"LM",valueLMM,"arma",2))]
		[tabellaLL = strformat("%{tabellaLL}<td>%{valueLL2}</td><td>%{valueCD2}</td>")]
	}]
	[tabellaLL = tabellaLL +"</tr>"]
}]



<!-- Non serve, solo per prova -->
[h: sDisplay = getPreferenza("tabellaPoteri_Display",source,"SchedaHTML")]
[h, if(json.isEmpty(sDisplay)): sDiplay="display: block;"]




[frame5(sFrame):{
<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="CharSheet5_css@[r: getMacroLocation()]">

	<title> Scheda </title>
    <script type="text/javascript">
	[r:"
        function toggle_visibility(id,sDisplay) {
            var e = document.getElementById(id);
            if (e.style.display == sDisplay)
                e.style.display = 'none';
            else
                e.style.display = sDisplay;
        }
	"]
    </script>
</head>
<body class="dataCentered">

<table  class="center"> <tr id="generic"> <td><img src='[r: getTokenImage(60)]'/> </td><td valign="middle" style="font-size:140%; font-weight:bold;"> [r:getName(source)]</td></tr> </table>
<form method="json" action='[r: macroLinkText("gui/changeConfig@this")]'>


<table class="center">
<tr id='generic'> <td><input type="image" name="Aggiorna" value="Aggiorna" src='[r: getImage("Image:refresh-small")]' class='image'/> </td><th> Arma 1</th> [r:tableHead]</tr>
[r: strTabella]
</table>

<h4><a href="#" onclick="toggle_visibility('dettagli_aggiuntivi','block');" class="boxtitle">Dettagli aggiuntivi</a>
<br>
<table class="center" id="dettagli_aggiuntivi" style="display:none;">
<tr class='evenRow'><td class='description'>Prob. Critico </td><td>[r: round(getCritProb(getCrit(source)),1)]%</td></tr>
<tr class='oddRow'><td class='description'> Costo Mana Crit.</td><td>[r: round(calcPercentMod(-getPCrit(source)/100)*100,1)]%</td></tr>
<tr class='evenRow'><td class='description'>VA</td><td>[r: round(calcPercentMod(-getVA(source)/100)*100,1)]%</td></tr>
</table>

<input type="hidden" name="source" value="[r:source]" />
<input type="hidden" name="frameName" value="[r:sFrame]" />
<input type="submit" name="Stili" value="Stili"/> &nbsp;
<input type="submit" name="Armi" value="Armi"/>
</form>

<hr/>

<h4><a href="#" onclick="toggle_visibility('calc_modificatore_danno','block');" class="boxtitle">Calcolo del modificatore al danno</a>
<p id="calc_modificatore_danno" style="display:none;">
Bersaglio attuale: <b>[r:tName]</b> <br>
Mod. LA attuale: <b>[r:strformat("&nbsp;%+d",fakeLAMod)]</b>
<br> <br>
<table class="center">
<tr id="generic"><td/><th> Arma 1</th> [r:tableHead]</tr>
[r: damageTab]
</table>
<br>
<form method='json' action='[r: macroLinkText("gui/inputFakeLAMod@this")]'>
<input type='submit' value='Cambia Mod. LA'/> 
<input type='hidden' name='source' value='[r:source]'/>
</form>
</p>

<hr/>
<br>

[h,if(checkS == 1): sHeader ="<th> LL 2 </th><th> CD 2 </th>";sHeader = ""]
<p class="boxtitle"><a href="#" onclick="toggle_visibility('tabella_poteri','block');" class="boxtitle">Maestria Poteri</a></p>
<table  class="center" id="tabella_poteri" style='display:block;'>
<tr id="generic"> <th> Scuola </th> <th> LMM </th><th> LL </th><th> CD </th> [r:sHeader] </tr>
[r: tabellaLL]
</table>

<hr/>
<br>

[h: listCap ="Analisi,Arcanologia,Atletica,Autorita,Furtivita,Lotta,Manualita,Perspicacia,Persuasione,Recupero,Sopravvivenza,Tenacia"]

[h:arrayTabella = ""]
[h, foreach (cap,listCap,","), code:{
	[h: element = json.set("","value",cap,"opzioni","class='description'")]
	[h: arrayRiga = json.append("",element)]
	[h: valore = getProperty(cap)]
	[h: element = json.set("","value",valore)]
	[h: arrayRiga = json.append(arrayRiga,element)]
	[h: element = json.set("","value","<input type='submit' name='"+cap+"' value='tira'/>")]
	[h: arrayRiga = json.append(arrayRiga,element)]
	[h: arrayTabella = json.append(arrayTabella,arrayRiga)]
}]


[macro("gui/generaTabellaHTML@this"):arrayTabella]
[h: strTabella = macro.return]
<form method="json" action   = '[r: macroLinkText("gui/rollCapacita@this")]'>
<table class="center" >
<tr> <td>Tiro segreto</td><td><input type="checkbox" name="bSecretRoll" value=1></td></tr>
<tr id="generic"> <th>Capacità</td><th> Grado</th></tr>
[r: strTabella]
</table>
<input type="hidden" name="target" value="[r:source]"/>
</form>

</html>
}]