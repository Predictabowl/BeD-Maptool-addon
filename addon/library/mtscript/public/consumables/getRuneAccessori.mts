[h: oToken = arg(0)]

[h: aRuneSet = "[]"]
[macro("mobs/getAccessorioEquip@this"): json.append(oToken,"anello")]
[macro("consumables/getAllRuneFromOggettoExploded@this"): macro.return]
[h: aRuneSet = json.merge(aRuneSet, macro.return)]

[macro("mobs/getAccessorioEquip@this"): json.append(oToken,"anello",2)]
[macro("consumables/getAllRuneFromOggettoExploded@this"): macro.return]
[h: aRuneSet = json.merge(aRuneSet, macro.return)]

[macro("mobs/getAccessorioEquip@this"): json.append(oToken,"amuleto")]
[macro("consumables/getAllRuneFromOggettoExploded@this"): macro.return]
[h: aRuneSet = json.merge(aRuneSet, macro.return)]

[macro("mobs/getAccessorioEquip@this"): json.append(oToken,"bracciali")]
[macro("consumables/getAllRuneFromOggettoExploded@this"): macro.return]
[h: aRuneSet = json.merge(aRuneSet, macro.return)]

[macro("mobs/getAccessorioEquip@this"): json.append(oToken,"mantello")]
[macro("consumables/getAllRuneFromOggettoExploded@this"): macro.return]
[h: aRuneSet = json.merge(aRuneSet, macro.return)]

[macro("mobs/getAccessorioEquip@this"): json.append(oToken,"cintura")]
[macro("consumables/getAllRuneFromOggettoExploded@this"): macro.return]
[h: aRuneSet = json.merge(aRuneSet, macro.return)]

[macro("mobs/getAccessorioEquip@this"): json.append(oToken,"stivali")]
[macro("consumables/getAllRuneFromOggettoExploded@this"): macro.return]
[h: aRuneSet = json.merge(aRuneSet, macro.return)]

[macro("mobs/getAccessorioEquip@this"): json.append(oToken,"guanti")]
[macro("consumables/getAllRuneFromOggettoExploded@this"): macro.return]
[h: aRuneSet = json.merge(aRuneSet, macro.return)]

[macro("mobs/getAccessorioEquip@this"): json.append(oToken,"elmo")]
[macro("consumables/getAllRuneFromOggettoExploded@this"): macro.return]
[h: aRuneSet = json.merge(aRuneSet, macro.return)]


[h: macro.return = aRuneSet]
