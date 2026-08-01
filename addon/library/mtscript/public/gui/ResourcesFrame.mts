[h: target = json.get(macro.args,0)]
[h: sFrame = "Risorse"]
[h, if(json.length(macro.args) > 1), code:{
	[sTemp = json.get(macro.args,1)]
	[if(startsWith(sTemp,sFrame)): sFrame = sTemp; sFrame = strformat("%{sFrame}%{sTemp}")]
}]


[h: switchToken(target)]
[h: identity = isGM()]
[h, if(identity == 1), code:{
	[h: PAGM = '<td> <input type="text" size=3 name="curaPA" value="0"/> </td>' ]
	[h: MMGM = '<td> <input type="text" size=3 name="curaMM" value="0"/> </td>']
	[hiddenV = ""]
};{
	[h: PAGM = ""]
	[h: MMGM = ""]
	[hiddenV = '<input type="hidden" name="curaMM" value="0"/> <input type="hidden" name="curaPA" value="0"/>']
}]

[frame(sFrame):{
<html>
<head> 
<link rel="stylesheet" type="text/css" href="CharSheet_css@[r: getMacroLocation()]">
<title> Gestione Risorse PG</title> 
</head>
<body>
<form name="modRisorse" method="json" action   ="[r:macroLinkText("applicaModRisorse@"+ getMacroLocation())]">
<h3 align="center"> [r: getName(target)] </h3>
<table id="generic">
[h: classType="evenRow"]
<tr> <td>  </td> <th > Consumati </th><th> Recuperati </th></tr>
<tr> <td><b> PV </b></td> <td> <input type="text" size=3 name="dannoVita" value="0"/> </td> <td> <input type="text" size=3 name="curaVita" value="0"/> </td> </tr>
<tr> <td><b> PF </b></td> <td> <input type="text" size=3 name="dannoFatica" value="0"/> </td> <td> <input type="text" size=3 name="curaFatica" value="0"/> </td> </tr>
<tr> <td><b> Mana </b></td> <td> <input type="text" size=3 name="dannoMana" value="0"/> </td> <td> <input type="text" size=3 name="curaMana" value="0"/> </td> </tr>
<tr> <td><b> PA </b></td> <td> <input type="text" size=3 name="dannoPA" value="0"/> </td> [r: PAGM]</tr>
<tr> <td><b> MM </b></td> <td> <input type="text" size=3 name="dannoMM" value="0"/> </td> [r: MMGM]</tr>


</table>
<input type="hidden" name="target" value="[r: target]"/>
<input type="hidden" name="GM" value="[r:identity]"/>
[r: hiddenV]
<br>
 &nbsp; &nbsp;<input type="submit" name="Applica" value="Applica"/>
 &nbsp; &nbsp;<input type="submit" name="Azzera" value="Azzera"/>
</body>
</html>
}]