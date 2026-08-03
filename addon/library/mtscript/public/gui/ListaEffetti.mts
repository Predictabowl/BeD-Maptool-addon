[h: target = macro.args]
[dialog5 ("Effetti"), code:{
	<html>
	<head> 
	<link rel="stylesheet" type="text/css" href="lib://it.aldinucci.piero.bed.maptool.ruleset/css/CharSheet5.css">
	<title> Effetti Attivi</title> 
	</head>
	<body>
	[h: list = getEffetti(target)]
	<table class="center">
	<tr class="genericTable"><th> Nome </th> <th> Round rimanenti </th> </tr>
	[h: classType = "oddRow"]
	[r, foreach(i,list,"<br>"), code:{
		[h: classType = if(classType=="oddRow","evenRow","oddRow")]
		<tr class='[r:classType]'>
		[h: eff = i]
		[h: subList= json.get(list,i)]
		<td align="left">[r: replace(eff,"_"," ")]</td>
		[h: dur = json.get(subList,"durata")]
		<td>[r: dur]</td>
		</tr>
	}]
	</table>
	</body>
	</html>
}]