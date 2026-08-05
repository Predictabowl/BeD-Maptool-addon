<!-- TODO check if is removable -->
[h: oToken = getImpersonated()]
[h: sFrame = "TestFrame"]


[frame5(sFrame):{
	<html>
<head> 
	[r: data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/html/CharSheetCssLink.html")]
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
