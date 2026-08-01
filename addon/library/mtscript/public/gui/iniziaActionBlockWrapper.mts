[h: source = json.get(macro.args,"source")]
[h: sMacro = json.get(macro.args,"macro")]
[h: macro.args = json.remove(macro.args,"macro")]

[macro("gui/blockIfNotOwner@this"):source]

[macro(sMacro):macro.args]