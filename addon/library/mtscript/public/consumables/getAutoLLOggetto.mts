[h: source = arg(0)]
[h: sLibName = arg(1)]
[h, if(argCount() > 2): oUseParam = arg(2), oUseParam = ""]

[macro("consumables/getItemAuto@this"): macro.args]
[h: oOggetto = macro.return]

[macro("consumables/getLLOggetto@this"): json.append(oOggetto, source)]