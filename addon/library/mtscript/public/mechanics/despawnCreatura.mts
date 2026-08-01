[h: oToken = findToken(macro.args)]


[macro("powers/removeTokenAuras@this"): oToken]
[macro("core/RemoveAllEffects@this"): oToken]
[h: switchToken(oToken)]
[h: removeFromInitiative()]
[h: removeToken(oToken)]