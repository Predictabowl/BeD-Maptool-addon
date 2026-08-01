[h: oToken = arg(0)]

[h, macro("mobs/getIngombroAllArmi@this"): oToken]
[h: macro.return = macro.return +getIngombroConsumabili(oToken) + getProperty("Mod_Ingombro", oToken)]
