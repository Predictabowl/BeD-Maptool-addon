[h: oOggetto = arg(0)]

[h: aRuneSet = "[]"]
[h: sLocalId = json.get(oOggetto, "localId")]
[macro("consumables/getAllRuneFromOggetto@this"): oOggetto]
[h, foreach(sRuna, macro.return), code: {
	[oTemp = json.append(sLocalId, sRuna)]
	[aRuneSet = json.append(aRuneSet, oTemp)]
}]

[h: macro.return = aRuneSet]