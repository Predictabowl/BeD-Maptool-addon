[h: oToken = arg(0)]
[h: sEffectName = arg(1)]

[h: oLEffetti = getEffetti(oToken)]
[h: macro.return = json.get(oLEffetti,sEffectName)]