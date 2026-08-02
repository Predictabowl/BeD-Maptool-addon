[h: oArma = arg(0)]

[h, macro("gui/getItemCategory@this"): oArma]
[h, if(macro.return == "armaDistanza"): macro.return = 1; macro.return = 0]