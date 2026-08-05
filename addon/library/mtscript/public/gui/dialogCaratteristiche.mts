[h: oToken = arg(0)]

[h: sDialog = "DialogCaratteristiche"]

[h, if(isDialogVisible(sDialog)), code:{
	[closeDialog(sDialog)]
	[return(0,0)]
}]

[h: switchToken(oToken)]

[dialog5(sDialog, "width=520; height=280; temporary=1; closebutton=1; noframe=1"):{
	<html>
	<head>
		[r: data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/html/CharSheetCssLink.html")]
		<title> Caratteristiche </title>
		<style>[r: "
			.tableContainer{
				display: grid;
				grid-template-columns: repeat(3, 1fr);
				gap: 10px;
			}
			div.tableContainer > div > table {
				border-collapse: collapse;
				border-spacing: 15px 0px;
				width: 100%;
			}
			tr.mainRow > td {
				padding: 5px;
			}
			tr {
				background-color: white;
			}

			.mainRow{
				font-size: 1.25rem;
				font-weight: bold;
				background-color: lightyellow;
			}
			.subItem {
				padding-left: 15px;
			}
			"]
		</style>
	</head>
	<body>
	<div style="display:flex; justify-content:center; align-items:center; flex-direction:column">
		<div class="tableContainer">
			<div>
				<table>
					<tr class="mainRow"> <td>Forza</td><td>[r: Forza]</td></tr>
					<tr> <td class="subItem">Muscoli</td><td>[r: Muscoli]</td></tr>
					<tr> <td class="subItem">Vigore</td><td>[r: Vigore]</td> </tr>
				</table>
			</div>
			<div>
				<table>
					<tr class="mainRow"> <td>Destrezza</td><td>[r: Destrezza]</td></tr>
					<tr> <td class="subItem">Precisione</td><td>[r: Precisione]</td></tr>
					<tr> <td class="subItem">Equilibrio</td><td>[r: Equilibrio]</td></tr>
				</table>
			</div>
			<div>
				<table>
					<tr class="mainRow"> <td>Costituzione</td><td>[r: Costituzione]</td></tr>
					<tr> <td class="subItem">Salute</td><td>[r: Salute]</td></tr>
					<tr> <td class="subItem">Resistenza</td><td>[r: Resistenza]</td></tr>
				</table>
			</div>
			<div>
				<table>
					<tr class="mainRow"><td>Intelligenza</td><td>[r: Intelligenza]</td> </tr>
					<tr> <td class="subItem">Ragione</td><td>[r: Ragione]</td> </tr>
					<tr> <td class="subItem">Conoscenza</td><td>[r: Conoscenza]</td> </tr>
				</table>
			</div>
			<div>
				<table>
					<tr class="mainRow"> <td>Saggezza</td><td>[r: Saggezza]</td> </tr>
					<tr> <td class="subItem">Volontà</td><td>[r: Volonta]</td></tr>
					<tr> <td class="subItem">Intuizione</td><td>[r: Intuizione]</td></tr>
				</table>
			</div>
			<div>
				<table>
					<tr class="mainRow"> <td>Carisma</td><td>[r: Carisma]</td> </tr>
					<tr> <td class="subItem">Presenza</td><td>[r: Presenza]</td> </tr>
					<tr> <td class="subItem">Risolutezza</td><td>[r: Risolutezza]</td></tr>
				</table>
			</div>
		</div>
		<div class="mainRow"> Car. Mana [r: getCarM(oToken)]</div>
	</div>
	
	</body>
	</html>
}]