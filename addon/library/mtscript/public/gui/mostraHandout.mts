[h: oToken = arg(0)]

[dialog5("Dialog_Handout", strformat("temporary=1; width=1000; height=1000; closebutton=0; noframe=0;")):{
<html>

<head> 
	<link rel="stylesheet" type="text/css" href="lib://it.aldinucci.piero.bed.maptool.ruleset/css/CharSheet5.css">
	<title>Immagine</title> 
</head>
<body align="center">
	<div style="height:99%">
		<img src='[r:getTokenHandout("", oToken)]' style="height:100%;"></img>
	</div>
</body>
</html>
}]