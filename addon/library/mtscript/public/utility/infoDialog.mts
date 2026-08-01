[h: sKey = arg(0)]

[macro("utility/stampaAcronimo@this"): sKey]
[h: sAcro = json.get(macro.return, "acronimo")]
[macro("utility/textProcessHTML@this"): json.get(macro.return, "descrizione")]
[h: sInfo = macro.return]

[h: sDialog = "infoDialog"]
[h: height = 250]
[dialog5(sDialog,strformat("noframe=1; closeButton=0; temporary=1; width=550; height=%{height};")):{
<html onmouseleave="closeForm()">
<head>
	<link rel="stylesheet" type="text/css" href="lib://Scheda/macro/CharSheet5_css">
	<title> Test Title </title>
</head>
<body style="overflow:hidden">
	<div style="border: 5px ridge paleGreen; padding: 5px; margin: 0; height: [r: (height - 38)]px; overflow: scroll; background-color: honeyDew;">
		<div style="text-align: center;">
			<span style="color:maroon; font-weight: bold">[r:sKey]</span>
			[r, if(sAcro != ""): ": "+sAcro]
		</div>
		<div style="margin-top: 10px">
			[r: sInfo]
		</div>
	</div>
	<form method="json" id="close-form" action="[r: macroLinkText('gui/closeWindow@this')]">
		<input type="hidden" name="name" value="[r: sDialog]">
	</form>
	<script>
	[r:"
		function closeForm(){
			document.getElementById('close-form').submit();
		}
	"]
	</script>
</body>
</html>
}]