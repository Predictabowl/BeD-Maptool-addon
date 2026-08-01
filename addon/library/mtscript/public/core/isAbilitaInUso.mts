[h: source = json.get(macro.args,0)]
[h: sAbNome = json.get(macro.args,1)]

[h: switchToken(source)]
[macro("core/getAbilitaInUso@this"):source]
[h: macro.return = listContains(macro.return,sAbNome)]