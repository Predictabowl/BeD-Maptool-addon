[h: oToken = arg(0)]

[h: sNomeToken = strformat("Bersaglio-%s",getName(oToken))]
[h: oBersaglio = findToken(sNomeToken)]
[h, if(oBersaglio == ""), code: {
	[macro("powers/spawnTokenBersaglio@this"): oToken]
}; {
	[macro("powers/despawnTokenBersaglio@this"): oToken]
}]