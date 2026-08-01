<!-- Restituisce tutte le abilità di classe da un token PG-->
[h: source = macro.args]

[h: switchToken(source)]
[h, if(json.type(Abilita_Classe) != "OBJECT"): Abilita_Classe = "{}"]
[h: lResult = Abilita_Classe]

[h: macro.return = lResult]