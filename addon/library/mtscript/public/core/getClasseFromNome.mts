[h: source = json.get(macro.args,0)]
[h: abNome  = json.get(macro.args,1)]

[macro("core/getAbilitaClasse@this"): macro.args]
[h: sClasse = json.get(macro.return,"Classe")]
[h: macro.return = sClasse]