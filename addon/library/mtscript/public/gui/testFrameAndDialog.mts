[h: oToken = getImpersonated()]
[h: sFrame = "TestFrame"]


[frame5(sFrame):{
	<html>
<head> 
	<link rel="stylesheet" type="text/css" href="CharSheet5_css@[r: getMacroLocation()]">
	<script>
	[r: "
		function updateDiv(){
			load(window.location.href + ' #updatable' );
		}
	"]
	</script>
</head>

<div>
	Mana1 statico: [r: getProperty("Mana",oToken)]
</div>
<div id="updatable">
</div>
<button type="button" onclick="updateDiv()">Reload</button>

</body>
</html>
}]
