[h: target = macro.args]
[h: switchToken(target)]
[h: macro("core/getListaCapacita@this"): 0]
[h: listCap = macro.return]

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

[frame("Capacita Generali"):{
<html>
<head
<link rel="stylesheet" type="text/css" href="CharSheet_css@[r: getMacroLocation()]">
<title> Capacità Generali </title>
</head>
<body class="dataCentered">
<h2> [r:getName(target)] </h2>
<form method="json" action   = '[r: macroLinkText("gui/rollCapacita@this")]'>

<table>
<tr id="generic"> <th>Capacità</td><th> Grado</th></tr>
[r: strTabella]
</table>
<br>
<input type="hidden" name="target" value="[r:target]"/>
</form>
<form action   ='[r: macroLinkText("gui/updateFrame@this")]'>
<input type="hidden" name="frame" value ="[r:getMacroName()]" />
<input type="image" name="Aggiorna" value="Aggiorna" src='[r: getImage("Lib:refresh-small")]' />
</form>
</html>
}]