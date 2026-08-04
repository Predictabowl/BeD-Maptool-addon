<!-- Restituisce un abilità di classe da un token PG-->
[h: source = json.get(macro.args,0)]
[h: nomeAbilita = json.get(macro.args,1)]

[h: switchToken(source)]
[h, if(json.type(Abilita_Classe) != "OBJECT"): Abilita_Classe = "{}"]
[h: macro.return = json.get(Abilita_Classe,nomeAbilita)]
