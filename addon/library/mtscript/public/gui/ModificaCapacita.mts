[h: target = macro.args]
[h: switchToken(target)]
[h: listCap ="Acrobazia,Arcanologia,Atletica,Autorita,Erudizione,Fitness,Furtivita,Intrattenimento,Lotta,Manualita,Medicina,Percezione,Perspicacia,Persuasione,Resilienza,Sociologia,Sopravvivenza,Tenacia"]

[h:arrayTabella = ""]
[h, foreach (cap,listCap,","), code:{
	[h: element = json.set("","value",cap,"opzioni","class='description'")]
	[h: arrayRiga = json.append("",element)]
	[h: valore = getProperty(cap)]
	[h: element = json.set("","value",valore)]
	[h: arrayRiga = json.append(arrayRiga,element)]
	[h: element = json.set("","value","<input type='text' size=2 name='"+ cap+"' value='"+valore+"'/>")]
	[h: arrayRiga = json.append(arrayRiga,element)]
	[h: arrayTabella = json.append(arrayTabella,arrayRiga)]
}]


[macro("gui/generaTabellaHTML@this"):arrayTabella]
[h: strTabella = macro.return]

[dialog5("Capacita Generali","closebutton=0"):{
<html>
<head>
	[r: data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/html/CharSheetCssLink.html")]
	<title> Capacità Generali </title>
</head>
<body class="dataCentered">
	<h3> [r:getName(target)] </h3>
	<form name="modCapacita" method="json" action   ="[r: macroLinkText("gui/updateCapacita@lib:it.aldinucci.piero.bed.maptool.ruleset")]">
	
	<table class="center">
		<thead>
			<tr class="genericTable"> <th>Capacità</td><th> Grado</th> <th> Nuovo Valore</th></tr>
		</thead>
		<tbody>
		[r: strTabella]
		</tbody>
	</table>
	<br>
	
	<input type="hidden" name="target" value ="[r:target]" />
	<input type="hidden" name="listCap" value ="[r:listCap]" />
	<input type="submit" name="Modifica" value="Modifica"/> &nbsp; &nbsp;
	<input type="submit" name="Annulla" value="Annulla"/>
	</form>
</body>
</html>
}]