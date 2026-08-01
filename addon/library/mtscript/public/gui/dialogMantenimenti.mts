[h: target = macro.args]

[h: objMant =  getProperty("Mantenimenti",target)]

[h: switchToken(target)]
[dialog5("Mantenimento Poteri","width=450; height=250; temporary=true;"):{
<html>
<head> 
	<link rel="stylesheet" type="text/css" href="lib://Scheda/macro/CharSheet5_css?cachelib=true">

	<title> Mantenimento dei Poteri</title>
	<style>
	[r:"
		row label {
		  display: flex;
		  justify-content: space-between;
		  align-items: center;
		  padding: 8px 12px;
		}
		
		.row input {
		  margin-left: 1rem;
		  vertical-align: middle;
		  transform: translateY(-2px);
		}
	"]
	</style>
</head>
<body>
<form action   ="[r: macroLinkText("gui/gestisciMantenimenti@this")]" method="json">
	<h3> Mantenimento Poteri</h3>
	<div>
	[h: classType="evenRow"]
	[foreach (sItem,objMant), code:{
		[h: oItem = json.get(objMant,sItem)]
		[h: sNome = json.get(oItem,"nome")]
		[h: value = macro.return]
	
		[h: classType = if(classType=="oddRow","evenRow","oddRow")]
		<div class="row">
			<label class="[r:classType]">
				<span>[r: sNome]</span>
				<input type="checkbox" name="[r: sItem]" checked/>
			</label>
		</div>
	}]
	</div>
	
	<input type="hidden" name="target" value="[r: target]"/>
	<input type="submit" value="Conferma" style="margin:10px;"/>
</form>
</body>
</html>
}]
