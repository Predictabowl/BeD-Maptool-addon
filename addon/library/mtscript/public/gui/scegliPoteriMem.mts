[h, if(json.type(macro.args) == "OBJECT"), code:{
	[h: target = json.get(macro.args,"target")]
};{
	[h: target = macro.args]
}]

[h, macro("gui/getPoteriNonMem@this"):target]
[h: tempList = macro.return]
[h: sThis = getMacroLocation()]

[dialog5("MemPoteriConosciuti"):{
<html>
<head> 
[r: data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/html/CharSheetCssLink.html")]
<title> Libro Incantesimi </title> 
<script>
	[r:"
		function add_Row(){
			var iFrame = document.getElementByID("Poteri");
			var elem = iFrame.getElementById("tabella_poteri_mem");
			elem.style.display = 'none';
		}
	"]
</script>
</head>
<body  align="center">

<h2>[r: getName(target)]</h2>

<form name="memorizzaPoteri" method="json" action   ="[r:macroLinkText("gui/memorizzaPoteri@lib:it.aldinucci.piero.bed.maptool.ruleset")]">
<table class="centerNoCollapse">
[h: classType="evenRow"]
[h: iIndice = 0]

[r, foreach(item, tempList, ""), CODE:{
	[h: isOdd = math.mod(iIndice,2)]
	[h: classType = if(isOdd == 0,"evenRow","oddRow")]
	<tr class="[r: classType]">
	<td> <input type="submit" name="indice" value= [r: iIndice+1] onclick='add_Row()'/></td>
	<td align='left'> [r: getLibProperty("nome_decorativo",item)]</td>
	[h: param = json.append(target,item)]
	<td ><span style='color:red'> [r: macrolink("X","gui/rimuoviPotereDaLibro@" + sThis,"none",param)] </span></td>
	</tr>
	[h: iIndice = iIndice +1]
}]
</table>
<input type='hidden' name='target' value='[r:target]'/>
<input type='hidden' name='lista' value='[r: tempList]'/>
<input type='submit' name='Aggiorna' value='Aggiorna'/>
</form>

</body>
</html>
}]
