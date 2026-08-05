[h: source = json.get(macro.args,0)]
[h: target = json.get(macro.args,1)]
[h: checkS = json.get(macro.args,2)]
[h: switchToken(source)]

<!-- Il FakeMod adesso modifica il LA quindi non va calcolato, andava messo dove ora c'è 0 -->
[h: iLA1 = getLA(source,1)]

[h: LDT = getLD(target)]
[h: iLDS = getLDSpalle(target)]
[h: iLAS1 = getLASpalle(source,1)]
[h: bonusN = MV.trunc((iLA1-LDT)*Moltiplicatore_Att)]
[h: bonusS = MV.trunc((iLA1+iLAS1-(LDT+iLDS))*Moltiplicatore_Att)]


[h: firstC = "Frontale,Spalle"]
[h: secondC = strformat("&nbsp;%+d,&nbsp;%+d",bonusN,bonusS)]

[h, if(checkS), code:{
	[h: iLA2 = getLA(source,2)]
	[h: iLAS2 = getLASpalle(source,2)]
	[h: bonusN2 = MV.trunc((iLA2-LDT)*Moltiplicatore_Att)]
	[h: bonusS2 = MV.trunc((iLA2+iLAS2-(LDT+iLDS))*Moltiplicatore_Att)]
	[h: thirdC = strformat("&nbsp;%+d,&nbsp;%+d",bonusN2,bonusS2)]
};{
	[thirdC=""]
}]

[h: arrayTabella =""]
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

[macro("gui/generaTabellaHTML@this"):arrayTabella]
[h: strTabella = macro.return]

[dialog5("tabellaCalcoloDanni","width=200; height=150; temporary=1;"):{
<html>
<head> 
[r: data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/html/CharSheetCssLink.html")]

<title> Danno contro [r:getName(target)]</title> 
</head>
<body>
	<table class="center">
		[r:strTabella]
	</table>
</body>
}]