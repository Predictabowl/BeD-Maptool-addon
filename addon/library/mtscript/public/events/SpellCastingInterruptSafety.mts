[h: source = json.get(macro.args,"source")]
[h: oToken = json.get(macro.args,"origine")]

[macro("events/eventUninstaller@this"): json.append(source,"On_Damaged","SpellCastingDamageInterrupt")]
[macro("events/eventUninstaller@this"): json.append(oToken,"On_Action_End","SpellCastingInterruptSafety")]
[macro("events/eventUninstaller@this"): json.append(oToken,"On_Action_Interrupt","SpellCastingInterruptSafety")]
[h: macro.return = ""]
