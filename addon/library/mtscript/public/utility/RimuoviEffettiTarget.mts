[h: oToken = arg(0)]
[h: lEffetti = arg(1)]

[h, foreach(sEffetto, lEffetti), code:{
	[macro("core/RemoveEffect@this"): json.append(oToken, sEffetto)]
}]