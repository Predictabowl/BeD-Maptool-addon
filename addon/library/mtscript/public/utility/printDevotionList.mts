[h: oToken = arg(0)]

[h: lSpiriti = getArraySpiriti(oToken)]
[h, foreach(sSpirito, lSpiriti), code:{
	[macro("powers/getModRichiamoSpirito@this"): json.append(oToken,sSpirito)]
	[broadcast(strformat("%{sSpirito}: %{macro.return}"),getPlayerName())]
}]
