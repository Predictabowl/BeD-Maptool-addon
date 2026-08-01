[h: oToken = arg(0)]

[macro("mobs/getCarico@this"): oToken]
[h: iCarico = macro.return]
[macro("mobs/getIngombroAllArmi@this"): oToken]
[h: iSlot = iCarico - macro.return]

[h: macro.return = iSlot]