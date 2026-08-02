[h: oArma = arg(0)]

[h, macro("gui/getItemCategory@this"): oArma]
[h, if(macro.return == "armaLancio"): macro.return = 1; macro.return = 0]