[h: target = macro.args]
[h: switchToken(target)]
[h: listCap ="Attacco,Critico,Raffica,Tecnica,Velocita"]

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

[dialog("Gestisci Maestrie"):{
<html>
<head
<link rel="stylesheet" type="text/css" href="CharSheet_css@[r: getMacroLocation()]">
<title> Maestrie Armii </title>
</head>
<body class="dataCentered">
<h3> [r:getName(target)] </h3>
<form action   ="[r: macroLinkText("gui/updateFrame@this")]">

<table>
<tr id="generic"> <th>Capacità</td><th> Grado</th></tr>
[r: strTabella]
</table>
<br>

<input type="hidden" name="frame" value ="[r:getMacroName()]" />
<input type="submit" value="Aggiorna"/>
</form>
</html>
}]