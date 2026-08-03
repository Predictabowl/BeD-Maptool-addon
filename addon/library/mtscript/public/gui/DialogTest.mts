[dialog("Addon Test Dialog"):{
<html>
<head> 
	<link rel="stylesheet" type="text/css" href="lib://it.aldinucci.piero.bed.maptool.ruleset/css/CharSheet5.css?cachelib=false">
	<title> Addon Dialog Test </title> 
</head>
<body  align="center">

<h3>[r: getName(getImpersonated())]</h3>

<table id="generic">
[h: classType="evenRow"]
<tr> <td><input type="image" name="Aggiorna" value="Aggiorna" src='lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/refresh.png'/> </td>
<th> Nome </th> <th> Usi </th><th> PA </th><th> Te </th></th>Liv</th> </tr>
[r, for(i,0, 10), CODE:{
	[h: classType = if(classType=="oddRow","evenRow","oddRow")]
	<tr class="[r: classType]">
	<td> placeholder </td>
	<td align="left">item [r: i]</td>
	<td>1</td>
	<td> costo </td>
	<td class='tempoFont'> 15</td>
	[h: param = json.set("","target","target","key","sNome")]
	<td ><span style='color:red'> [r: macrolink("&chi","gui/rimuoviPotere@" + getMacroLocation(),"none",param)] </span></td>
	</tr>
}]
</table>

</body>
</html>
}]