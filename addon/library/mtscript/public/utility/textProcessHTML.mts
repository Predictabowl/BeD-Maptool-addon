[h: sText = arg(0)]

[h: sText = replace(sText,"\\n","<br>")]
[h: sText = replace(sText,"\\b([-+0-9d]*[0-9][0-9%]*)\\b","<span style='font-weight:bold;'>\$1</span>")]

[h: jKeys = getLibProperty("Highlight_Keywords", getMacroLocation())]
[h: lKeys = json.toList(jKeys, "|")]
[h: sText = replace(sText,"\\b("+lKeys+")\\b","<a href='macro://gui/infoDialog@this//Impersonated?\$1'>\$1</a>")]

[h: return(0,sText)]

<!-- old Regex -->
[h: sRegex = "\\b([\\S.^]*[\\d+-][\\S.]*)\\b"]