[h: source = macro.args]

[h: switchToken(source)]

[h, if(json.type(Azione_Corrente) != "OBJECT"): Azione_Corrente = "{}"]

[h: macro.return = Azione_Corrente]