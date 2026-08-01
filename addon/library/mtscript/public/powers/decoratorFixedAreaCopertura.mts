[h: sNomeCopertura = json.get(macro.args,"coperturaName")]
[h: sMacro = json.get(macro.args,"decoratedCoperturaMacro")]

[macro("setCopertureMappaAttive@Lib:Meccaniche"): 0]
[macro(sMacro): macro.args]
[h: oReturn = macro.return]
[macro("setCopertureMappaAttive@Lib:Meccaniche"): 1]
[h: macro.return = oReturn]
