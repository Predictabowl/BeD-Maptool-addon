[h: target = macro.args]
[h: switchToken(target)]
[dialog5("LMM"):{
<html>
	<head> 
		<link rel="stylesheet" type="text/css" href="CharSheet5_css@[r: getMacroLocation()]">
		[h: list =  LMM]
		[h: listLen = countStrProp(list)]
		<title> Modifica Capacità di Combattimento</title> 
	</head>
	<body>
		<form action='[r: macroLinkText("setLMM@"+ getMacroLocation())]'>
			tscript/public/gui<h3>Modifica i valori di LMM</h3>
			<table class="center">
				[h: classType="evenRow"]
				<tr> <th> Scuola </th> <th> Valore Attuale </th><th> Nuovo Valore </th><th> Elimina </th></tr>
				[for (i,0,listLen,1,""), code:{
					[h: key = indexKeyStrProp(list,i)]
					[h: value = getStrProp(list,key)]
					[h: classType = if(classType=="oddRow","evenRow","oddRow")]
					<tr class="[r: classType]">
					<td align="left">[r: key]</td>
					<td> [r: value] </td>
					<td> <input type="text" size=2 name="[r:key]" value="[r: value]"/> </td>
					[h: param = json.set("","target",target,"key",key)]
					<td> [r: macrolink("Rimuovi","gui/RemoveLMM@this","none",param)] </td></tr>
				}]
			</table>
			[r: macrolink("Aggiungi Scuola","AddScuolaLMM@"+getMacroLocation(),"none",target)] <br><br>
			<input type="hidden" name="target" value="[r: target]"/>
			<input type="submit" value="Salva"/>
		</form>
	</body>
</html>
}]
