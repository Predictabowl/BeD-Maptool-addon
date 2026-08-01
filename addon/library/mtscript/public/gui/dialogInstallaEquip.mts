[h: oToken = getSelected()]
[h: sDialog = "DialogAssegnaEquip"]

[h: switchToken(oToken)]

[dialog5(sDialog, strformat("temporary=0; width=800; height=780; closebutton=0")):{
<html>

<head> 
	<link rel="stylesheet" type="text/css" href="CharSheet5_css@[r: getMacroLocation()]">
	<title> Installa Oggetti</title> 
	
</head>
<body align="center">
	<h2> [r: getName(oToken)] </h2>
	<div style="display:grid; grid-template-columns: auto auto auto auto; place-content:start space-around; grid-gap:5px; margin-left:5px; margin-right:5px;">

		<div>
			[r, macro("gui/makeHTMLSelectEquip@this"): json.append(oToken, "arma")]
		</div>
		<div>
			[r, macro("gui/makeHTMLSelectEquip@this"): json.append(oToken, "armatura")]
		</div>
		<div>
			[r, macro("gui/makeHTMLSelectEquip@this"): json.append(oToken, "scudo")]
		</div>
		<div>
			[r, macro("gui/makeHTMLSelectEquip@this"): json.append(oToken, "anello")]
		</div>
		<div>
			[r, macro("gui/makeHTMLSelectEquip@this"): json.append(oToken, "amuleto")]
		</div>
		<div>
			[r, macro("gui/makeHTMLSelectEquip@this"): json.append(oToken, "cintura")]
		</div>
		<div>
			[r, macro("gui/makeHTMLSelectEquip@this"): json.append(oToken, "elmo")]
		</div>
		<div>
			[r, macro("gui/makeHTMLSelectEquip@this"): json.append(oToken, "bracciali")]
		</div>
		<div>
			[r, macro("gui/makeHTMLSelectEquip@this"): json.append(oToken, "stivali")]
		</div>
		<div>
			[r, macro("gui/makeHTMLSelectEquip@this"): json.append(oToken, "mantello")]
		</div>
		<div>
			[r, macro("gui/makeHTMLSelectEquip@this"): json.append(oToken, "guanti")]
		</div>				
	</div>

</body>
</html>
}]
