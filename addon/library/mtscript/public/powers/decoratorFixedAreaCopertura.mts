[h: sNomeCopertura = json.get(macro.args,"coperturaName")]
[h: sMacro = json.get(macro.args,"decoratedCoperturaMacro")]

[macro("mechanics/setCopertureMappaAttive@this"): 0]
[macro(sMacro): macro.args]
[h: oReturn = macro.return]
[macro("mechanics/setCopertureMappaAttive@this"): 1]
[h: macro.return = oReturn]
