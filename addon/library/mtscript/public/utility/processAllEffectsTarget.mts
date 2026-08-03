[h: oToken = arg(0)]

[macro("core/getTokenEffects@this"): oToken]
[h: lEffetti = macro.return]
[h: i = 20]

[h, while(!json.isEmpty(lEffetti)), code:{
	[macro("core/AutoUpdateEffectTime@this"): json.append(oToken,-1)]
	[sMsg = popMessaggio(oToken,"msgEffetto")]
	[if(sMsg != ""): broadcast(sMsg)]
	[macro("core/getTokenEffects@this"): oToken]
	[lEffetti = macro.return]
	[i = i -1]
	[if (i < 1): lEffetti = "[]"]
}]