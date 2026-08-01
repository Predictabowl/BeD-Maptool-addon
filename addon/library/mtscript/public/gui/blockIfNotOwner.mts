[h: source = macro.args]

[h, if(findToken(source) == ""): return(0,"")]
[macro("gui/isAllowed@this"): source]
[h, if(!macro.return): abort(0)]