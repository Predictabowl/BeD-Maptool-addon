[h: source = json.get(macro.args,0)]
[h: nomeAbilita = json.get(macro.args,1)]

[h: switchToken(source)]
[h, if(json.type(Abilita_Classe) != "OBJECT"): Abilita_Classe = "{}"]
[h: Abilita_Classe = json.remove(Abilita_Classe,nomeAbilita)]