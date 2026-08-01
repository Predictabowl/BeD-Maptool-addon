[h: ids = getInitiativeList()]
[h: ids = json.get(ids,"tokens")]
[h: setProperty("Frazione",0,"MapVar")]

[h, foreach(id, ids, ""), CODE:
{
	[h: target = json.get(id,"tokenId")]
	[h: switchToken(target)]
	[h: iniz = getProperty("Tiro_Iniziativa")]
	[h: tiro = eval(string(iniz))]
	[h: setInitiative(tiro)]
	[h: Lista_Dati = setStrProp(Lista_Dati,"Frazione",tiro)]
}]
[macro("utility/sortIniziativa@this"):0]