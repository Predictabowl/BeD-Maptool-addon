[h: source = json.get(macro.args,"source")]
[h: oToken = json.get(macro.args,"interattivo")]

[h: switchToken(oToken)]

[h: jParametri = parametri]
[h: jOptions = json.get(jParametri, "options")]
[h: sBookName = getGMName()]
[h, if(sBookName == ""): sBookName = getName()]
[h: jClasses = json.get(jOptions, "classes")]
[h: sPageClasses = json.get(jClasses, "page")]
[h: aPages = json.get(jParametri, "pages")]

[h, if(json.length(aPages) > 1): leftArrVisibility = "visible"; leftArrVisibility="hidden"]

[dialog5("Libro","width=700; height=900; temporary=1;"):{
<html>
<head> 
	[r: data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/html/ItemCssLink.html")]
	<title> [r:getName(oToken)]</title> 
</head>
<body class="libroBody">

	<div class="pagina-libro">
		<div class="titoloLibro"> [r: sBookName] </div>
		<div id="page-text" class="[r: sPageClasses]"></div>
		<div class="num-pagina">
			<a id="previous-page" style= "visibility:hidden" href="#" onclick="prevPage()">&larr;</a>
			<span id="page-num">1</span> / [r: json.length(aPages)]
			<a id="next-page" href="#" style="visibility:[r: leftArrVisibility]"onclick="nextPage()">&rarr;</a>
		</div>
	</div>
	
	<script id="chaptersMeta" type="application/json">
		[r: aPages]
	</script>
	
	<script>
	[r:"
		var iChapter = 0;
		const chaptersData = document.getElementById('chaptersMeta').textContent;
		const chaptersJson = JSON.parse(chaptersData);

		document.addEventListener('DOMContentLoaded', function() {
			writePage();
		}, false);
		
		function writePage() {
			const pageEl = document.getElementById('page-text');
			pageEl.innerHTML = chaptersJson[iChapter];
		}
		
		function prevPage() {
			iChapter = iChapter -1;
			writePage();
			document.getElementById('page-num').innerHTML = iChapter +1;
			if(iChapter < 1){
				document.getElementById('previous-page').style.visibility='hidden';
			}
			if(iChapter < chaptersJson.length -1){
				document.getElementById('next-page').style.visibility='visible';
			}
			
		}
	
		function nextPage(){
			iChapter = iChapter +1;
			writePage();
			document.getElementById('page-num').innerHTML = iChapter +1;
			if(iChapter >= chaptersJson.length -1){
				document.getElementById('next-page').style.visibility='hidden';
			}
			if(iChapter > 0){
				document.getElementById('previous-page').style.visibility='visible';
			}
		}

	"]
	</script>
</body>
</html>
}]
