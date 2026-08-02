[h: sKey = arg(0)]

[h: sAcro = ""]
[h: sDescr = ""]

[h: jData = data.getStaticData("it.aldinucci.piero.bed.maptool.ruleset", "public/db/text/Keyword_Descriptions.json")]


[h: jElement = json.get(jData, lower(sKey))]
[h, while(json.contains(jElement, "link")), code: {
	[jElement =	json.get(jData, json.get(jElement, "link"))]
}]

[h, if(json.isEmpty(jElement)), code: {
	[sAcro = ""]
	[sDescr = "Spiegazione mancante"]
};{
	[sAcro = json.get(jElement, "sAcro")]
	[sDescr = json.get(jElement, "sDescr")]
}]

[h: return(0, json.set("","acronimo",sAcro,"descrizione",sDescr))]
