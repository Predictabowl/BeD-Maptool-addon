[h: spellId = arg(0)]
[h: macroName = arg(1)]

[h: macro.return = strformat("spells/%{spellId}/%{macroName}@%s", getMacroLocation())]
