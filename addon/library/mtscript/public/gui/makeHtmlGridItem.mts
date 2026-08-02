[h: sId = arg(0)]
[h: sContent = arg(1)]
[h: sBGImage = arg(2)]
[h: sCategoria = arg(3)]

[h: sImg = strformat("lib://it.aldinucci.piero.bed.maptool.ruleset/icons/gui/%{sBGImage}")]
[h: sBg = strformat('background-image: url("%{sImg}");')]

[h: sItem = strformat("<div id='%{sId}' data-categoria='%{sCategoria}' ondrop='drop(event)' ondragover='allowDrop(event)' ondragleave='dragLeave(event)' class='paperdoll-item' style='%{sBg}'>%{sContent}</div>")]

[r: sItem]