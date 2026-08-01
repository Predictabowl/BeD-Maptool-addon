[h: token = json.get(macro.args,0)]
[h: nomeC = json.get(macro.args,1)]

[h: switchToken(token)]
[h: Configurazioni_Scheda = json.remove(Configurazioni_Scheda,nomeC)]