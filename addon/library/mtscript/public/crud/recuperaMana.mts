[h: oToken = arg(0)]
[h: iMana = arg(1)]

<!-- here eventual modifiers to mana recovered -->

[macro("core/changeCurrentMana@this"): json.append(oToken,iMana,"msgManaRegen")]